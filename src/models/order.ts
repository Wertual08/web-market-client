export default class Order {
  id: number = 0
  state: string = ''
  userId: number|null = null
  email: string = ''
  phone: string = ''
  name: string = ''
  surname: string = ''
  address: string = ''
  promoCode: string = ''
  description: string = ''
  createdAt: number = 0
  updatedAt: number = 0
  requestedAt: number|null = null
  finishedAt: number|null = null
}