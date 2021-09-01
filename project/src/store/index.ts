import { InjectionKey } from "vue";
import { createLogger, createStore, useStore as baseUseStore, Store } from "vuex"
import createPersistedState from 'vuex-persistedstate'
import Profile from "@/models/profile"
import Auth from "@/models/auth";

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
  }
})

export function useStore() {
  return baseUseStore(key)
}