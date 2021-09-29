import AbstractRepository from '@/repositories/abstractRepository'
import Section from '@/models/admin/section'
import Record from '@/models/record'



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

  public async putSection(model: Section): Promise<Section> {
    let response = await this.axios.put(model.id.toString(), {
      SectionId: model.sectionId,
      Name: model.name,
      RecordId: model.record?.id,
    })
    return this.map(response.data)
  }

  public async createSection(model: Section): Promise<Section> {
    let response = await this.axios.post('', {
      SectionId: model.sectionId,
      Name: model.name,
      RecordId: model.record?.id,
    })
    return this.map(response.data)
  }
}