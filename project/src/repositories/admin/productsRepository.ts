import AbstractRepository from "@/repositories/abstractRepository"
import Product from "@/models/admin/product"



export default class ProductsRepository extends AbstractRepository<Product> {
  protected map(item: any): Product {
    const prod = new Product()
    prod.id = item.Id
    prod.name = item.Name
    prod.description = item.Description
    prod.price = item.Price
    prod.createdAt = Date.parse(item.CreatedAt)
    prod.updatedAt = Date.parse(item.UpdatedAt)
    prod.categories = item.Categories
    for (let i = 0; i < item.Sections.length; i++) {
      prod.sections.push(item.Sections[i].Name)
    }
    for (let i = 0; i < item.Records.length; i++) {
      prod.records.push('/api/records/' + item.Records[i])
    }
    return prod
  }

  public constructor() {
    super('/api/admin/products')
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

  public async createProduct(): Promise<Product> {
    let response = await this.axios.post('')
    return this.map(response.data)
  }
}