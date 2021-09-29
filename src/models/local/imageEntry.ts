import Record from "../record"

export default class ImageEntry {
  public record: Record|null
  public newUrl: string|null

  public url(): string|null {
    return this.record?.url ?? null
  }

  public constructor(record: Record|null = null) {
    this.record = record
    this.newUrl = record?.url ?? null
  }
}