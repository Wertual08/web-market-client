import AbstractRepository from '@/repositories/abstractRepository'
import Section from '@/models/admin/section'
import Record from '@/models/record'
import PutProductRequest from '@/repositories/requests/admin/putProductRequest'
import PutSectionRequest from '@/repositories/requests/admin/putSectionRequest'
import CreateSectionRequest from '@/repositories/requests/admin/createSectionRequest'



export default class ProductsRepository extends AbstractRepository<Section> {
  protected map(item: any): Section {
    return new Section(item)
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