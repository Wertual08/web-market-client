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

  public cancelable(): boolean {
    return this.state === 'Requested' || 
      this.state === 'Accepted';
  }

  public formatState(): string {
    if (this.state === 'Requested') {
      return 'В обработке'
    } else if (this.state === 'Accepted') {
      return 'Принят'
    } else if (this.state === 'Processed') {
      return 'Собран'
    } else  if (this.state === 'Sent') {
      return 'Отправлен'
    } else  if (this.state === 'Completed') {
      return 'Выполнен'
    } else  if (this.state === 'Canceled') {
      return 'Отменен'
    } else {
      return 'Неизвестный'
    } 
  }
}