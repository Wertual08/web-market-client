import axios, { AxiosInstance, AxiosRequestConfig } from "axios"



export default abstract class AbstractRepository<T> {
  protected readonly axios: AxiosInstance
  protected readonly baseURL: string

  protected abstract map(item: any): T

  protected constructor(url: string) {
    this.baseURL = url
    const config: AxiosRequestConfig = {
      baseURL: this.baseURL,
    }

    this.axios = axios.create(config)
  }
}