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

  public async Search(quer: string, page: number = 0, categories: number[] = [],
    sections: number[] = []): Promise<SearchProduct[]> {
      let response = await this.axios.get('', {
        params: {
          query: quer,
          page: page,
          categories: categories,
          sections: sections,
        }
      })
      let data = response.data;
    let Products: SearchProduct[] = []
    for (let i = 0; i < data.length; i++) {
      Products.push(this.map(data[i]))
    }
    return Products
  }
}