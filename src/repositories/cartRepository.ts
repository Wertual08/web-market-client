import AbstractRepository from "./abstractRepository"
import CartProduct from "@/models/cartProduct"
import LiteProductsRepository from "./liteProductsRepository"



export default class CartRepository extends AbstractRepository<CartProduct> {
  protected map(item: any): CartProduct {
    const model = new CartProduct()
    model.amount = item.Amount
    model.productId = item.ProductId
    return model
  }

  private liteProductsRepository: LiteProductsRepository
  
  public constructor() {
    super('/api/cart')

    this.liteProductsRepository = new LiteProductsRepository()
  }

  public async initCart(): Promise<void> {
    if (this.authorized()) {
      let cart = this.store.state.cart

      if (cart.length == 0) {
        let responese = await this.axios.get('')
        let data = responese.data;
    
        let models: CartProduct[] = []
        for (let i = 0; i < data.length; i++) {
          models.push(this.map(data[i]))
        }
        this.store.commit('cart', models)
      } else {
        let productsObject: any = {}
        cart.forEach(model => productsObject[model.productId] = model.amount)
        await this.axios.put('', {
          Products: productsObject,
        })
      }
    }
  }

  public getCart(): CartProduct[] {
    return this.store.state.cart
  }

  public async addCart(id: number, amount: number) {
    let model = new CartProduct()
    model.amount = amount + (this.store.state.cart.find(item => item.productId == id)?.amount ?? 0)
    model.productId = id
    
    if (this.authorized()) {
      await this.axios.post('', {
        ProductId: model.productId,
        Amount: model.amount,
      })
    } 
    this.store.commit('cartAdd', model)
  }

  public async removeProduct(id: number) {
    if (this.authorized()) {
      await this.axios.delete(id.toString())
    } 
    
    this.store.commit('cartRemove', id)
  }

  public async clearCart(): Promise<void> {
    if (this.authorized()) {
      await this.axios.put('', {
        Products: {},
      })
    } 
    this.store.commit('cart', [])
  }

  public getAmount(): number {
    const cart = this.store.state.cart
    let amount = 0
    for (let i = 0; i < cart.length; i++) {
      amount += cart[i].amount
    }
    return amount
  }
}