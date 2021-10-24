export default class LiteProduct {
  public id: number = 0
  public code: string = ''
  public oldPrice: number|null = null
  public price: number = 0
  public name: string = ''
  public description: string = ''
  public image: string = ''
  public categories: number[] = []
  public sections: number[] = []

  public constructor(item: any = null) {
    if (item !== null) {
      this.id = item.Id
      this.name = item.Name
      this.description = item.Description
      this.oldPrice = item.OldPrice
      this.price = item.Price
      this.categories = item.Categories
      this.sections = item.Sections
      this.image = item.Image
    }
  }
}

