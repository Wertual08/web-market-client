import AbstractRepository from "./abstractRepository"
import SearchProduct from "@/models/searchProduct"

class SearchRepository extends AbstractRepository<SearchProduct> {
  public constructor() {
    super('/search/products')
  }
  protected map(item: any): SearchProduct {
    const prod = new SearchProduct()
    prod.id = item.Id
    prod.name = item.Name
    prod.description = item.Description
    prod.price = item.Price
    prod.categories = item.Categories
    prod.sections = item.Sections
    prod.image = item.Image

    return prod
  }

  public async Search(quer: string): Promise<SearchProduct[]> {
    let response = await this.axios.get('', { params: { query: quer } })
    let data = response.data;
    let Products: SearchProduct[] = []
    for (let i = 0; i < data.length; i++) {
      Products.push(this.map(data[i]))
    }
    return Products
  }
}

export default new SearchRepository()