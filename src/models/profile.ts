export default class Profile {
  public id: number = 0
  public role: string = ''
  public email: string = ''
  public phone: string = ''
  public name: string = ''
  public surname: string = ''

  public isAdmin(): boolean {
    return this.role.toLowerCase() == 'admin'
  }
}