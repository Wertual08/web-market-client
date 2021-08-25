import Auth from "@/models/auth";
import AbstractRepository from "./abstractRepository";



class AuthRepository extends AbstractRepository<Auth> {
  protected map(item: any): Auth {
    const result = new Auth()
    result.refreshToken = item.RefreshToken
    result.accessToken = item.AccessToken
    return result
  }

  public constructor() {
    super('/api/auth')
  }

  public async register(
    login: string, 
    password: string, 
    email: string, 
    phone: string|null,
    name: string|null,
    surname: string|null,
  ): Promise<Auth> {
    const response = await this.axios.post('register', {
      Login: login,
      Password: password,
      Email: email,
      Phone: phone,
      Name: name,
      Surname: surname,
    })
    const data = response.data
    return this.map(data)
  }

  public async login(login: string, password: string): Promise<Auth> {
    const response = await this.axios.post('login', {
      Login: login,
      Password: password,
    })
    const data = response.data
    return this.map(data)
  }

  public async refresh(refreshToken: string): Promise<Auth> {
    const response = await this.axios.post('refresh', {
      Token: refreshToken
    })
    const data = response.data
    return this.map(data)
  }
}

export default new AuthRepository()