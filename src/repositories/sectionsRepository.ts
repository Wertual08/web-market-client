import AbstractRepository from "./abstractRepository"
import Section from "@/models/section"



export default class SectionsRepository extends AbstractRepository<Section> {
  protected map(item: any): Section {
    const section = new Section() 
    section.id = item.Id
    section.name = item.Name
    section.sectionId = item.ParentId
    section.sections = item.Sections
    return section
  }

  public constructor() {
    super('/api/sections')
  }

  public async getSections(): Promise<Section[]> {
    let response = await this.axios.get('')
    let data = response.data;
    let sections: Section[] = []
    for (let i = 0; i < data.length; i++) {
      sections.push(this.map(data[i]))
    }

    return sections
  }
}