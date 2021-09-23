export default class Record {
  public id: number = 0
  public identifier: string = ''
  public createdAt: number = 0
  public contentType: string = ''
  public name: string = ''

  public url: string = ''

  public constructor(item: any = null) {
    if (item !== null) {
      this.id = item.Id
      this.identifier = item.Identifier
      this.createdAt = Date.parse(item.CreatedAt)
      this.contentType = item.ContentType
      this.name = item.Name
      this.url = `/api/records/${this.identifier}`
    }
  }
}