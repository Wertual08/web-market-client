import { createLogger, createStore, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Auth from '@/models/auth'
import Profile from '@/models/profile'
import ProfileRepository from '@/repositories/profileRepository'

export class State {
  public auth: Auth|null = null
  public profile: Profile|null = null
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
  },

  getters: {
    auth(state) {
      return state.auth
    },
    profile(state) {
      return state.profile
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