import AbstractRepository from "./abstractRepository"
import Profile from "@/models/profile"

export default class ProfileRepository extends AbstractRepository<Profile> {
  public constructor() {
    super('/api/profile')
  }
  protected map(item: any): Profile {
    const result = new Profile()
    result.id = item.Id
    result.login = item.Login
    result.email = item.Email
    result.phone = item.Phone
    result.name = item.Name
    result.surname = item.Surname
    result.role = item.Role

    return result
  }

  public async get(): Promise<Profile|null> {
    if (this.store.state.profile === null && this.store.state.auth !== null) {
      let response = await this.axios.get('')
      let data = response.data;
      this.store.commit('profile', this.map(data))
    }
    return this.store.state.profile
  }
}