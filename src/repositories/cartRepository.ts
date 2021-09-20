import AbstractRepository from "./abstractRepository"
import CartProduct from "@/models/cartProduct"
import ProductsRepository from "@/repositories/productsRepository"
import { State } from "@/store"



export default class CartRepository extends AbstractRepository<CartProduct> {
  protected map(item: any): CartProduct {
    const cartProduct = new CartProduct()
    cartProduct.amount = item.Id
    cartProduct.product = item.Product
    return cartProduct
  }
  
  public constructor() {
    super('/api/cart')
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
    if (this.store.state.auth === null) {
      // или лучше смотреть "profile === null"?
      cartProducts = this.store.state.cart
      return cartProducts
    } else {
      // грузим с API
      return cartProducts
    }
  }

  public addCart(id: number, amount: number) {
    let productsRepository = new ProductsRepository()
    productsRepository.getProduct(id)
    .then(prod => {
      if (this.store.state.auth === null) {
        let cartProd = new CartProduct()
        cartProd.amount = amount
        cartProd.product = prod
        this.store.commit('cartAdd', cartProd)
      } else {
        // API
      }
    })
  }

  public removeProduct(id: number) {
    if (this.store.state.auth === null) {
      this.store.commit('cartRemove', id)
    } else {
      // API
    }
  }

  public getAmount() {
    if (this.store.state.auth === null) {
      return this.store.state.cartAmount
    }
  }
}