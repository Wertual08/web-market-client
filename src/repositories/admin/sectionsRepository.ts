import AbstractRepository from "@/repositories/abstractRepository"
import Section from "@/models/admin/section"
import PutProductRequest from "@/requests/admin/putProductRequest"



export default class ProductsRepository extends AbstractRepository<Section> {
  protected map(item: any): Section {
    const result = new Section()
    result.id = item.Id
    result.sectionId = item.SectionId
    result.name = item.Name
    result.createdAt = Date.parse(item.CreatedAt)
    result.updatedAt = Date.parse(item.UpdatedAt)
    result.record = item.Record
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

  public async putSection(request: PutProductRequest): Promise<Section> {
    let response = await this.axios.put(`${request.id}`, {
      Name: request.name,
      Description: request.description,
      Price: request.price,
      Records: request.records,
      Categories: request.categories,
      Sections: request.sections,
    })
    return this.map(response.data)
  }

  public async createProduct(): Promise<Section> {
    let response = await this.axios.post('')
    return this.map(response.data)
  }
}