import AbstractRepository from "@/repositories/abstractRepository"
import Product from "@/models/admin/product"
import PutProductRequest from "@/repositories/requests/admin/putProductRequest"
import Record from "@/models/record"
import Section from "@/models/admin/section"



export default class ProductsRepository extends AbstractRepository<Product> {
  protected map(item: any): Product {
    const prod = new Product()
    prod.id = item.Id
    prod.name = item.Name
    prod.description = item.Description
    prod.price = item.Price
    prod.createdAt = Date.parse(item.CreatedAt)
    prod.updatedAt = Date.parse(item.UpdatedAt)
    for (let i = 0; i < item.Sections.length; i++) {
      prod.sections.push(new Section(item.Sections[i]))
    }
    for (let i = 0; i < item.Records.length; i++) {
      prod.records.push(new Record(item.Records[i]))
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

  public async putProduct(request: PutProductRequest): Promise<Product> {
    let response = await this.axios.put(`${request.id}`, {
      Name: request.name,
      Description: request.description,
      Price: request.price,
      Records: request.records,
      Categories: request.categories,
      Sections: request.sections,
    })
    return this.map(response.data)
  }

  public async createProduct(): Promise<Product> {
    let response = await this.axios.post('')
    return this.map(response.data)
  }

  public async deleteProduct(id: number): Promise<Product> {
    let response = await this.axios.delete(id.toString())
    return this.map(response.data)
  }
}