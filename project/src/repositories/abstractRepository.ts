import { State, useStore } from "@/store"
import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import { Store } from "vuex"



export default abstract class AbstractRepository<T> {
  protected readonly store: Store<State>
  protected readonly axios: AxiosInstance
  protected readonly baseURL: string

  protected abstract map(item: any): T

  private getToken(): string|null {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmJmIjoiMTYyOTk4MTU3NiIsImV4cCI6IjE2MzA5ODE1NzUiLCJsb2dpbiI6ImFkbWluIiwicm9sZSI6IkFkbWluIn0.l27VVTpN1ebLDsCuIvpeC2OwmWbJIKtzIfC3n2qeNcg"
    return `JWT ${token}`
    //if (this.store.state.auth != null) {
    //  const token = this.store.state.auth.accessToken
    //  return `JWT ${token}`
    //} else {
    //  return null
    //}
  }

  protected constructor(url: string) {
    this.store = useStore()
    this.baseURL = url
    const config: AxiosRequestConfig = {
      baseURL: this.baseURL,
      headers: {
        Authorization: this.getToken() ?? undefined
      }
    }

    this.axios = axios.create(config)
  }
}