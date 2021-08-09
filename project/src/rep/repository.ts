import Product from "@/models/product"
import axios from "axios"

class Repa {
  private map(data: any) {
    const prod = new Product()
    prod.id = data.Id
    prod.name = data.Name
    return prod

  }
  public async getProdById(id: Number) {
    let response = await axios.get("/api/products/" + id)
    return this.map(response.data)
  }
  private() {
    this.getProdById(1).then((result: Product) => {
      
    })
  }
}

export default new Repa()