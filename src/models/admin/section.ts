import Record from "../record"

export default class Section {
  public id: number = -1
  public sectionId: number|null = null
  public name: string = ''
  public createdAt: number = 0
  public updatedAt: number = 0
  public record: Record|null = null
  public sections: Section[] = []

  public constructor(item: any = null) {
    if (item !== null) {
      this.id = item.Id
      this.sectionId = item.SectionId
      this.name = item.Name
      this.createdAt = Date.parse(item.CreatedAt)
      this.updatedAt = Date.parse(item.UpdatedAt)
      this.record = item.Record !== null ? new Record(item.Record) : null
      for (let i = 0; i < item.Sections.length; i++) {
        this.sections.push(new Section(item.Sections[i]))
      }
    }
  }
}