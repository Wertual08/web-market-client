import AbstractRepository from "./abstractRepository"
import LiteProduct from "@/models/liteProduct"
import qs from 'qs'



export default class LiteProductsRepository extends AbstractRepository<LiteProduct> {
  protected map(item: any): LiteProduct {
    const model = new LiteProduct()
    model.id = item.Id
    model.name = item.Name
    model.description = item.Description
    model.oldPrice = item.OldPrice
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

  public async getLiteProducts(ids: number[]): Promise<LiteProduct[]> {
    let response = await this.axios.get('', { 
      params: { 
        Ids: ids 
      },
      paramsSerializer: params =>{
        return qs.stringify(params, { arrayFormat: 'repeat' })
      },
    })
    let result: LiteProduct[] = []
    for (let i = 0; i < response.data.length; i++) {
      result.push(this.map(response.data[i]))
    }
    return result
  }
}