import axios, { AxiosInstance, AxiosRequestConfig } from "axios"



export default abstract class AbstractRepository<T> {
  protected readonly axios: AxiosInstance
  protected readonly baseURL: string

  protected abstract map(item: any): T

  private getToken(): string {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmJmIjoiMTYyOTk4MTU3NiIsImV4cCI6IjE2MzA5ODE1NzUiLCJsb2dpbiI6ImFkbWluIiwicm9sZSI6IkFkbWluIn0.l27VVTpN1ebLDsCuIvpeC2OwmWbJIKtzIfC3n2qeNcg"
    return `JWT ${token}`
  }

  protected constructor(url: string) {
    this.baseURL = url
    const config: AxiosRequestConfig = {
      baseURL: this.baseURL,
      headers: {
        Authorization: this.getToken()
      }
    }

    this.axios = axios.create(config)
  }
}