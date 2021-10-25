import AbstractRepository from '../abstractRepository'
import Order from '@/models/order'
import OrderProduct from '@/models/orderProduct'
import LiteProduct from '@/models/liteProduct'



export default class OrdersRepository extends AbstractRepository<Order> {
  protected map(item: any): Order {
    const model = new Order()
    model.id = item.Id
    model.state = item.State
    model.userId = item.UserId
    model.email = item.Email
    model.phone = item.Phone
    model.name = item.Name
    model.surname = item.Surname
    model.address = item.Address
    model.promoCode = item.PromoCode
    model.description = item.Description
    model.createdAt = Date.parse(item.CreatedAt)
    model.updatedAt = Date.parse(item.UpdatedAt)
    model.requestedAt = item.RequestedAt ? Date.parse(item.RequestedAt) : null
    model.finishedAt = item.FinishedAt ? Date.parse(item.FinishedAt) : null
    return model
  }

  public constructor() {
    super('/api/admin/orders')
  }

  public async updateOrder(id: number, state: string): Promise<Order> {
    const response = await this.axios.put(id.toString(), {
      State: state,
    })
    return this.map(response.data)
  }

  public async getOrders(page: number): Promise<Order[]> {
    const response = await this.axios.get('', {
      params: {
        page,
      }
    })
    
    let models: Order[] = []
    response.data.forEach((item: any) => {
      models.push(this.map(item))
    });
    return models
  }

  public async getOrder(id: number): Promise<Order> {
    const response = await this.axios.get(id.toString())
    return this.map(response.data)
  }

  public async getOrderProducts(id: number): Promise<OrderProduct[]> {
    const response = await this.axios.get(`${id}/products`);
    const data = response.data
    let models: OrderProduct[] = []
    data.forEach((item: any) => {
      models.push({
        amount: item.Amount,
        price: item.Price,
        product: new LiteProduct(item.Product)
      });
    });
    return models
  }
}