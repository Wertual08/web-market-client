import Record from "@/models/record"
import AbstractRepository from "./abstractRepository"

export default class RecordsRepository extends AbstractRepository<Record> {
  public toUrl(identifier: string|null): string|null {
    if (identifier) {
      return `/api/records/${identifier}`
    } else {
      return null
    }
  }

  public constructor() {
    super('/api/records')
  }

  protected map(item: any): Record {
    const model = new Record()
    model.id = item.Id
    model.identifier = item.Identifier
    model.createdAt = Date.parse(item.CreatedAt)
    model.contentType = item.ContentType
    model.name = item.Name
    return model
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
}