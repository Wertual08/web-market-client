export default class Order {
  public id: number = 0
  public state: string = ''
  public userId: number|null = null
  public email: string = ''
  public phone: string = ''
  public name: string = ''
  public surname: string = ''
  public address: string = ''
  public promoCode: string = ''
  public description: string = ''
  public createdAt: number = 0
  public updatedAt: number = 0
  public requestedAt: number|null = null
  public finishedAt: number|null = null
}