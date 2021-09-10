import AbstractRepository from '@/repositories/abstractRepository'
import Section from '@/models/admin/section'
import Record from '@/models/record'
import PutProductRequest from '@/requests/admin/putProductRequest'
import PutSectionRequest from '@/requests/admin/putSectionRequest'
import CreateSectionRequest from '@/requests/admin/createSectionRequest'



export default class ProductsRepository extends AbstractRepository<Section> {
  protected mapRecord(item: any): Record|null {
    if (item === null) {
      return null
    }

    const model = new Record()
    model.id = item.Id
    model.identifier = item.Identifier
    model.createdAt = Date.parse(item.CreatedAt)
    model.contentType = item.ContentType
    model.name = item.Name
    return model
  }

  protected map(item: any): Section {
    const result = new Section()
    result.id = item.Id
    result.sectionId = item.SectionId
    result.name = item.Name
    result.createdAt = Date.parse(item.CreatedAt)
    result.updatedAt = Date.parse(item.UpdatedAt)
    result.record = this.mapRecord(item.Record)
    for (let i = 0; i < item.Sections.length; i++) {
      result.sections.push(this.map(item.Sections[i]))
    }
    return result
  }

  public constructor() {
    super('/api/admin/sections')
  }

  public async getSection(id: number): Promise<Section> {
    let response = await this.axios.get(id.toString())
    return this.map(response.data)
  }

  public async getSections(): Promise<Section[]> {
    let response = await this.axios.get('')
    let data = response.data;

    let result: Section[] = []
    for (let i = 0; i < data.length; i++) {
      result.push(this.map(data[i]))
    }

    return result
  }

  public async putSection(request: PutSectionRequest): Promise<Section> {
    let response = await this.axios.put(`${request.id}`, {
      SectionId: request.sectionId,
      Name: request.name,
      RecordId: request.recordId,
    })
    return this.map(response.data)
  }

  public async createSection(request: CreateSectionRequest): Promise<Section> {
    let response = await this.axios.post('', {
      SectionId: request.sectionId,
      Name: request.name,
      RecordId: request.recordId,
    })
    return this.map(response.data)
  }
}