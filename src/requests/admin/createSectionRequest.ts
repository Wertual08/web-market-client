import Section from "@/models/admin/section"

export default class CreateSectionRequest {
  public sectionId: number|null
  public name: string
  public recordId: number|null

  public constructor(section: Section) {
    this.sectionId = section.sectionId
    this.name = section.name
    this.recordId = section.record?.id ?? null
  }
}