import Auth from "@/models/auth"
import BadRequestError from "@/models/errors/badRequestError"
import ConflictError from "@/models/errors/conflictError"
import ForbiddenError from "@/models/errors/forbiddenError"
import UnouthorizedError from "@/models/errors/unouthorizedError"
import { State, useStore } from "@/store"
import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import { Store } from "vuex"



export default abstract class AbstractRepository<T> {
  protected readonly store: Store<State>
  protected readonly axios: AxiosInstance
  protected readonly baseURL: string

  protected authorized(): boolean {
    return this.store.state.auth !== null
  }

  protected abstract map(item: any): T

  private async refreshToken(token: string): Promise<Auth|null> {
    const inst = axios.create({ baseURL: '/api/auth' })
    const response = await inst.post('refresh', {
      Token: token
    })
    if (response.status != 200) {
      return null
    }
    const data = response.data;
    const result = new Auth()
    result.refreshToken = data.RefreshToken
    result.accessToken = data.AccessToken
    result.expiresAt = data.ExpiresAt
    return result
  }

  private async getToken(): Promise<string|null> {
    let auth = this.store.state.auth;
    if (auth != null) {
      if (auth.expiresAt < new Date().valueOf() / 1000 - 10) {
        auth = await this.refreshToken(auth.refreshToken)
        this.store.commit('auth', auth)
        if (auth == null) {
          return null
        }
      }

      const token = auth.accessToken
      return `JWT ${token}`
    } else {
      return null
    }
  }

  private mapBadRequest(data: any): BadRequestError {
    let result = new BadRequestError()
    return result
  }
  private mapUnouthorized(data: any): UnouthorizedError {
    let result = new UnouthorizedError()
    return result
  }
  private mapForbidden(data: any): ForbiddenError {
    let result = new ForbiddenError()
    return result
  }
  private mapConflict(data: any): ConflictError {
    let result = new ConflictError()
    result.field = data.Field
    return result;
  }

  protected constructor(url: string) {
    this.store = useStore()

    this.baseURL = url
    const config: AxiosRequestConfig = {
      baseURL: this.baseURL,
      headers: {
      }
    }

    this.axios = axios.create(config)

    this.axios.interceptors.request.use(async payload => {
      payload.headers.Authorization = await this.getToken()
      return payload
    })
    this.axios.interceptors.response.use(response => response, error => {
      const data = error.response.data
      switch (error.response.status) {
        case 400: throw this.mapBadRequest(data)
        case 401: throw this.mapUnouthorized(data)
        case 403: throw this.mapForbidden(data)
        case 409: throw this.mapConflict(data)
        default: throw error
      }
    })
  }
}