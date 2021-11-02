import Record from '@/models/record';
import qs from 'qs';
import AbstractRepository from '../abstractRepository'

export default class PublicRepository extends AbstractRepository<string> {
  protected  map(item: any): string {
    return ''
  }

  public constructor() {
    super('/api/admin/public')
  }

  public async updateMainSlides(ids: number[]): Promise<Record[]> {
    let response = await this.axios.put('main/slides', {}, {
      params: { records: ids },
      paramsSerializer(params): string {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      },
    })
    let data = response.data;

    let models: Record[] = []
    for (let i = 0; i < data.length; i++) {
      models.push(new Record(data[i]))
    }
    return models
  }

  public async getMainSlides(): Promise<Record[]> {
    let response = await this.axios.get('main/slides')
    let data = response.data;

    let models: Record[] = []
    for (let i = 0; i < data.length; i++) {
      models.push(new Record(data[i]))
    }
    return models
  }
}