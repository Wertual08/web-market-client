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
  public totalPrice: number = 0
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
      let isInCart = -1;
      for (let i = 0; i < state.cart.length; i++) {
        if (cartProd.product.id == state.cart[i].product.id) {
          isInCart = i;
        }
      }
      if (isInCart != -1) {
        state.cart[isInCart].amount += cartProd.amount
        state.totalPrice += cartProd.amount * cartProd.product.price
      }
      else {
        state.cart.push(cartProd)
        state.totalPrice += cartProd.amount * cartProd.product.price
      }
      state.cartAmount = state.cart.length
    },
    cartRemove(state, id: number) {
      let removingId = -1;
      for (let i = 0; i < state.cart.length; i++) {
        if (id == state.cart[i].product.id) {
          removingId = i;
        }
      }
      state.totalPrice -= state.cart[removingId].amount * state.cart[removingId].product.price
      state.cart = state.cart.filter(p => p.product.id !== id)
      state.cartAmount = state.cart.length
    },
    emptyCart(state) {
      state.cart = []
      state.cartAmount = 0,
      state.totalPrice = 0
    }
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