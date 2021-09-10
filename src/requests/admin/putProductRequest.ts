import Product from "@/models/admin/product"

export default class PutProductRequest {
  public id: number = 0
  public name: string = ''
  public description: string = ''
  public price: number = 0
  public records: number[] = []
  public categories: number[] = []
  public sections: number[] = []

  public constructor(product: Product) {
    this.id = product.id
    this.name = product.name
    this.description = product.description
    this.price = product.price
    this.records = []//product.records
    this.categories = []//product.categories
    this.sections = []//product.sections
  }
}