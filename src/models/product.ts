export default class Product {
  id: number = -1
  name: string = ''
  description: string = ''
  oldPrice: number|null = null
  price: number = -1
  records: string[] = []
  categories: string[] = []
  sections: string[] = []
}