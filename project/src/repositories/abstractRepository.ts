import Auth from "@/models/auth"
import { State, useStore } from "@/store"
import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import { Store } from "vuex"



export default abstract class AbstractRepository<T> {
  protected readonly store: Store<State>
  protected readonly axios: AxiosInstance
  protected readonly baseURL: string

  protected abstract map(item: any): T

  private async refreshToken(token: string): Promise<Auth|null> {
    const inst = axios.create()
    const response = await inst.post('api/auth/refresh', {
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
        this.store.commit('setAuth', auth)
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
  }
}