import AbstractRepository from './abstractRepository'

export default class PublicRepository extends AbstractRepository<string> {
  protected  map(item: any): string {
    return ''
  }

  public constructor() {
    super('/api/public')
  }

  public async getMainSlides(): Promise<string[]> {
    let response = await this.axios.get('main/slides')
    let data = response.data;

    let links: string[] = []
    for (let i = 0; i < data.length; i++) {
      links.push(data[i])
    }
    return links
  }
}