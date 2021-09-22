import Section from "@/models/admin/section"

export default class PutSectionRequest {
  public id: number
  public sectionId: number|null 
  public name: string
  public recordId: number|null

  public constructor(section: Section) {
    this.id = section.id
    this.sectionId = section.sectionId
    this.name = section.name
    this.recordId = section.record?.id ?? null
  }
}