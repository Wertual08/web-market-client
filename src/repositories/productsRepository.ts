import AbstractRepository from "./abstractRepository"
import Product from "@/models/product"
import ProductsStats from "@/models/productsStats"



export default class ProductsRepository extends AbstractRepository<Product> {
  protected map(item: any): Product {
    const model = new Product()
    model.id = item.Id
    model.name = item.Name
    model.description = item.Description
    model.price = item.Price
    model.categories = item.Categories
    model.sections = item.Sections
    for (let i = 0; i < item.Records.length; i++) {
      model.records.push('/api/records/' + item.Records[i])
    }
    return model
  }

  protected mapProductsStats(item: any): ProductsStats {
    const model = new ProductsStats()
    model.maxPrice = item.MaxPrice
    model.minPrice = item.MinPrice
    return model
  }

  public constructor() {
    super('/api/products')
  }

  public async getProduct(id: number): Promise<Product> {
    let response = await this.axios.get(id.toString())
    return this.map(response.data)
  }

  public async getProducts(page: number = 0, categories: number[] = [], sections: number[] = []): Promise<Product[]> {
    let response = await this.axios.get('', {
      params: {
        page: page,
        categories: categories,
        sections: sections,
      }
    })
    let data = response.data;

    let products: Product[] = []
    for (let i = 0; i < data.length; i++) {
      products.push(this.map(data[i]))
    }

    return products
  }

  public async getProductsStats(): Promise<ProductsStats> {
    let response = await this.axios.get('stats')
    let data = response.data

    return this.mapProductsStats(data)
  }
}