import Record from "@/models/record"
import AbstractRepository from "./abstractRepository"

export default class RecordsRepository extends AbstractRepository<Record> {
  public static toUrl(identifier: string|null): string {
    if (identifier === null) {
      return '';
    } else {
      return `/api/records/${identifier}`
    }
  }

  public constructor() {
    super('/api/records')
  }

  protected map(item: any): Record {
    return new Record(item)
  }

  public async getRecords(page: number): Promise<Record[]> {
    let response = await this.axios.get('', {
      params: {
        page,
      }
    })
    let data = response.data;

    let models: Record[] = []
    for (let i = 0; i < data.length; i++) {
      models.push(this.map(data[i]))
    }

    return models
  }

  public async createRecord(file: Blob): Promise<Record> {
    let formData = new FormData()
    formData.append('Files', file)

    let response = await this.axios.post('', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    let data = response.data

    let models: Record[] = []
    for (let i = 0; i < data.length; i++) {
      models.push(this.map(data[i]))
    }

    return models[0]
  }

  public async deleteRecord(id: number): Promise<Record> {
    let response = await this.axios.delete(id.toString())
    let data = response.data
    return this.map(data)
  }
}