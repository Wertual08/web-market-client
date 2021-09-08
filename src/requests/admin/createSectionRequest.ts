import Section from "@/models/admin/section"

export default class CreateSectionRequest {
  public sectionId: number|null = 0
  public name: string = ''
  public record: string = ''

  public constructor(section: Section) {
    this.sectionId = section.sectionId
    this.name = section.name
    this.record = section.record
  }
}