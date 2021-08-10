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
    if (data.Records[0]) {
      prod.records = data.Records
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
  // private() {
  //   this.getProdById(1).then((result: Product) => {

  //   })
  // }
}

export default new Repa()