import Product from "@/models/product"
import axios from "axios"
import Section from "@/models/sexual"

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
  private secmap(data: any){
    const section = new Section() 
    section.id = data.Id
    section.name = data.Name
    section.papa = data.ParentId
    section.son = data.Sections
    return section
  }
  public async getFuckingSections(){
    let sections: any = await axios.get('/api/sections')
    let readySections: Section[] = []
    for( let i = 0; i < sections.length; i++){
      readySections.push(this.secmap(sections[i]))
    }
  }
  public async getProdById(id: Number) {
    let response = await axios.get("/api/products/" + id)
    return this.map(response.data)
  }
  public async getProdList() {
    let response: any = await axios.get("/api/products")
    let readyProdList: Product[] = []
    for (let i = 0; i < response.length; i++) {
      readyProdList.push(this.map(response[i]))
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