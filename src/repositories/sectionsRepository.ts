import AbstractRepository from "./abstractRepository"
import Section from "@/models/section"



export default class SectionsRepository extends AbstractRepository<Section> {
  protected map(item: any): Section {
    const result = new Section() 
    result.id = item.Id
    result.name = item.Name
    result.sectionId = item.ParentId
    result.sections = []
    item.Sections.forEach((element: Section) => {
      result.sections.push(this.map(element))
    });
    return result
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