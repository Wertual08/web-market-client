import { createLogger, createStore, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Auth from '@/models/auth'
import Profile from '@/models/profile'
import CartProduct from '@/models/cartProduct'

export class State {
  public auth: Auth|null = null
  public profile: Profile|null = null
  public cart: CartProduct[] = []
}

export const store = createStore<State>({
  state: new State(),

  mutations: {
    auth(state, auth: Auth|null) {
      state.auth = auth
    },
    profile(state, profile: Profile|null) {
      state.profile = profile
    },

    cart(state, cartProducts: CartProduct[]) {
      state.cart = cartProducts
    },
    cartAdd(state, cartProduct: CartProduct) {
      let index = state.cart.findIndex(model => model.productId == cartProduct.productId)
      if (index >= 0) {
        state.cart[index] = cartProduct
      } else {
        state.cart.push(cartProduct)
      }
    },
    cartRemove(state, id: number) {
      state.cart = state.cart.filter(p => p.productId !== id)
    },
  },

  getters: {
    auth(state) {
      return state.auth
    },
    profile(state) {
      return state.profile
    },
    cart(state) {
      return state.cart
    }
  },

  plugins: [
    createPersistedState({
      paths: ['auth', 'cart', 'cartAmount'],
      storage: window.localStorage
    }),
    createLogger()
  ],
})

export function useStore(): Store<State> {
  return store
}