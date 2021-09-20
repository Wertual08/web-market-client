import { createLogger, createStore, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Auth from '@/models/auth'
import Profile from '@/models/profile'
import ProfileRepository from '@/repositories/profileRepository'
import CartProduct from '@/models/cartProduct'

export class State {
  public auth: Auth|null = null
  public profile: Profile|null = null
  public cart: CartProduct[] = []
  public cartAmount: number = 0
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
    cartAdd(state, cartProd: CartProduct) {
      state.cart.push(cartProd)
      state.cartAmount = state.cart.length
    },
    cartRemove(state, id: number) {
      state.cart = state.cart.filter(p => p.product.id !== id)
      state.cartAmount = state.cart.length
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
      storage: window.sessionStorage
    }),
    createLogger()
  ],
})

export function useStore(): Store<State> {
  return store
}