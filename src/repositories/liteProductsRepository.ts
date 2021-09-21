import AbstractRepository from "./abstractRepository"
import LiteProduct from "@/models/liteProduct"



export default class LiteProductsRepository extends AbstractRepository<LiteProduct> {
  protected map(item: any): LiteProduct {
    const model = new LiteProduct()
    model.id = item.Id
    model.name = item.Name
    model.description = item.Description
    model.price = item.Price
    model.categories = item.Categories
    model.sections = item.Sections
    model.image = item.Image
    return model
  }

  public constructor() {
    super('/api/lite/products')
  }

  public async getLiteProduct(id: number): Promise<LiteProduct> {
    let response = await this.axios.get(id.toString())
    return this.map(response.data)
  }
}