import AbstractRepository from "./abstractRepository"
import LiteProduct from "@/models/liteProduct"
import qs from 'qs'

export default class SearchRepository extends AbstractRepository<LiteProduct> {
  public constructor() {
    super('/api/search/products')
  }
  protected map(item: any): LiteProduct {
    const model = new LiteProduct()
    model.id = item.Id
    model.code = item.Code
    model.name = item.Name
    model.description = item.Description
    model.oldPrice = item.OldPrice
    model.price = item.Price
    model.categories = item.Categories
    model.sections = item.Sections
    model.image = item.Image
    return model
  }

  public async getProducts(
    query: string, 
    page: number = 0, 
    categories: number[] = [],
    sections: number[] = [],
    minPrice: number|null = null,
    maxPrice: number|null = null,
    discounted: boolean|null = null,
  ): Promise<LiteProduct[]> {
    let response = await this.axios.get('', {
      params: {
        Query: query,
        Page: page,
        Categories: categories,
        Sections: sections,
        MinPrice: minPrice,
        MaxPrice: maxPrice,
        Discounted: discounted,
      },
      paramsSerializer: params =>{
        return qs.stringify(params, { arrayFormat: 'repeat' })
      },
    })
    let data = response.data;
    let result: LiteProduct[] = []
    for (let i = 0; i < data.length; i++) {
      result.push(this.map(data[i]))
    }
    return result
  }
}