import AbstractRepository from "./abstractRepository"
import CartProduct from "@/models/cartProduct"
import LiteProductsRepository from "./liteProductsRepository"



export default class CartRepository extends AbstractRepository<CartProduct> {
  protected map(item: any): CartProduct {
    const model = new CartProduct()
    model.amount = item.Amount
    model.product = item.Product
    return model
  }

  private liteProductsRepository: LiteProductsRepository
  
  public constructor() {
    super('/api/cart')

    this.liteProductsRepository = new LiteProductsRepository()
  }

  public async getCartFromAPI(): Promise<CartProduct[]> {
    let responese = await this.axios.get('', {
      params: {
        page: 0,
      }
    })
    let data = responese.data;

    let cartProducts: CartProduct[] = []
    for (let i = 0; i < data.length; i++) {
      cartProducts.push(this.map(data[i]))
    }

    console.log(cartProducts)
    return cartProducts
  }

  public async getCart(): Promise<CartProduct[]> {
    let cartProducts: CartProduct[] = []
    if (this.authorized()) {
      // грузим с API
      return this.getCartFromAPI()
    } else {
      cartProducts = this.store.state.cart
      return cartProducts
    }
  }

  public addCart(id: number, amount: number) {
    this.liteProductsRepository.getLiteProduct(id)
    .then(model => {
      if (this.authorized()) {
        // API
      } else {
        let cartProd = new CartProduct()
        cartProd.amount = amount
        cartProd.product = model
        this.store.commit('cartAdd', cartProd)
      }
    })
  }

  public removeProduct(id: number) {
    if (this.authorized()) {
      // API
    } else {
      this.store.commit('cartRemove', id)
    }
  }

  public getAmount() {
    if (this.authorized()) {
      // API
    } else {
      return this.store.state.cartAmount
    }
  }
}