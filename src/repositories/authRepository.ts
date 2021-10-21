import Auth from '@/models/auth'
import AbstractRepository from './abstractRepository'



export default class AuthRepository extends AbstractRepository<Auth> {
  protected map(item: any): Auth {
    const result = new Auth()
    result.refreshToken = item.RefreshToken
    result.accessToken = item.AccessToken
    result.expiresAt = item.ExpiresAt
    return result
  }

  public constructor() {
    super('/api/auth')
  }

  public async register(
    email: string, 
    password: string, 
    phone: string|null,
    name: string|null,
    surname: string|null,
  ): Promise<Auth|null> {
    const response = await this.axios.post('register', {
      Email: email,
      Password: password,
      Phone: phone,
      Name: name,
      Surname: surname,
    })
    const data = response.data

    this.store.commit('auth', this.map(data))
    return this.store.state.auth
  }

  public async login(login: string, password: string): Promise<Auth|null> {
    const response = await this.axios.post('login', {
      Login: login,
      Password: password,
    })
    const data = response.data
    
    this.store.commit('auth', this.map(data))
    return this.store.state.auth
  }

  public async refresh(refreshToken: string): Promise<Auth|null> {
    const response = await this.axios.post('refresh', {
      Token: refreshToken
    })
    const data = response.data
    
    this.store.commit('auth', this.map(data))
    return this.store.state.auth
  }

  public async password(currentPassword: string, newPassword: string): Promise<void> {
    const response = await this.axios.post('password', {
      CurrentPassword: currentPassword,
      newPassword: newPassword,
    })
  }

  public async logout(): Promise<void> {
    this.store.commit('auth', null)
    this.store.commit('profile', null)
  }
}