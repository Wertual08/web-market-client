export default class Product {
  public id: number = -1
  public code: string = ''
  public name: string = ''
  public description: string = ''
  public oldPrice: number|null = null
  public price: number = -1
  public records: string[] = []
  public categories: string[] = []
  public sections: string[] = []
}