import Product from "@/models/product"
import axios from "axios"

class Repa {
  private map(data: any) {
    const prod = new Product()
    prod.id = data.Id
    prod.name = data.Name
    prod.description = data.Description
    prod.price = data.Price
    prod.categories = data.Categories
    prod.sections = data.Sections
    for (let i = 0; i < data.Records.length; i++) {
      prod.records.push('/api/records/' + data.Records[i])
    }

    return prod
  }
  public async getProdById(id: Number) {
    let response = await axios.get("/api/products/" + id)
    return this.map(response.data)
  }
  public async getProdList() {
    let response = await axios.get("/api/products")
    let products: any = response.data
    let readyProdList: Product[] = []
    for (let i = 0; i < products.length; i++) {
      readyProdList.push(this.map(products[i]))
    }
    return readyProdList
  }

  public getCoverImage(product: Product): String {
    if (product.records.length > 0) {
      return product.records[0]
    } else {
      return require('@/assets/meme.gif')
    }
  }
  // private() {
  //   this.getProdById(1).then((result: Product) => {

  //   })
  // }
}

export default new Repa()