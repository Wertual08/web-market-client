import { createLogger, createStore, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Auth from '@/models/auth'

export class State {
  public auth: Auth|null = null
}

export const store = createStore<State>({
  state: new State(),

  mutations: {
    auth(state: State, auth: Auth|null) {
      state.auth = auth
    },
  },

  getters: {
    auth(state: State) {
      console.log('SHIT')
      return state.auth
    },
  },

  plugins: [
    createPersistedState({
      paths: ['auth'],
      storage: window.sessionStorage
    }),
    createLogger()
  ],
})

export function useStore(): Store<State> {
  return store
}