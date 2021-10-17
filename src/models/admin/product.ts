import Section from './section'
import Record from '../record'


export default class Product {
  public id: number = -1
  public code: string = ''
  public name: string = ''
  public description: string = ''
  public privateInfo: string = ''
  public oldPrice: number|null = null
  public price: number = -1
  public createdAt: number = 0
  public updatedAt: number = 0
  public records: Record[] = []
  public sections: Section[] = []
}