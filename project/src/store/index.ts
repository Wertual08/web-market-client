import { InjectionKey } from 'vue'
import { createLogger, createStore, useStore as baseUseStore, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Profile from '@/models/profile'
import Auth from '@/models/auth'
import * as Cookies from 'js-cookie'

export interface State {
  profile: Profile|null
  auth: Auth|null
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    profile: null,
    auth: null
  },

  mutations: {
    setAuth(state: State, auth: Auth|null) {
      state.auth = auth
    }
  },

  plugins: [
    createPersistedState({
      key: 'keyname',
      storage: {
        getItem(key: string) {
          return Cookies.get(key)
        },

        setItem(key: string, value: string|object) {
          Cookies.set(key, value, {
            expires: 365,
            secure: false,
          })
        },

        removeItem(key: string) {
          Cookies.remove(key)
        },
      }      
    }),
    createLogger()
  ],
})

export function useStore() {
  return baseUseStore(key)
}