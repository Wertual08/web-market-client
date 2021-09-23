import Section from './section'
import Record from '../record'


export default class Product {
  id: number = -1
  name: string = ''
  description: string = ''
  price: number = -1
  createdAt: number = 0
  updatedAt: number = 0
  records: Record[] = []
  sections: Section[] = []
}