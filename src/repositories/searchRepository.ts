import AbstractRepository from "./abstractRepository"
import SearchProduct from "@/models/searchProduct"

export default class SearchRepository extends AbstractRepository<SearchProduct> {
  public constructor() {
    super('/api/search/products')
  }
  protected map(item: any): SearchProduct {
    const model = new SearchProduct()
    model.id = item.Id
    model.name = item.Name
    model.description = item.Description
    model.price = item.Price
    model.categories = item.Categories
    model.sections = item.Sections
    model.image = item.Image

    return model
  }

  public async getProducts(
    query: string, 
    page: number = 0, 
    categories: number[]|null = null,
    sections: number[]|null = null,
    minPrice: number|null = null,
    maxPrice: number|null = null,
  ): Promise<SearchProduct[]> {
    let response = await this.axios.get('', {
      params: {
        Query: query,
        Page: page,
        Categories: categories,
        Sections: sections,
        MinPrice: minPrice,
        MaxPrice: maxPrice,
      }
    })
    let data = response.data;
    let result: SearchProduct[] = []
    for (let i = 0; i < data.length; i++) {
      result.push(this.map(data[i]))
    }
    return result
  }
}