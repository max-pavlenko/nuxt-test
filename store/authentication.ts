import {MutationTree, ActionTree} from "vuex";
import apiClient from "~/api/axios/axios";

export const state = () => ({
  isAuthenticated: false,
  authError: '',
})

export type AuthState = ReturnType<typeof state>;
export type AuthStateObject = { authentication: AuthState };

export const getters = {
  isAuthenticated: (state: AuthState) => state.isAuthenticated,
  authError: (state: AuthState) => state.authError,
}

export const mutations: MutationTree<AuthState> = {
  setIsAuthenticated(state, isAuthenticated: boolean) {
    state.isAuthenticated = isAuthenticated;
  },
  setAuthError(state, error: string) {
    state.authError = error;
  },
};

export const actions: ActionTree<AuthState, AuthStateObject> = {
  async login({commit, state}, credentials) {
    let isAuthenticated = false;
    try {
      const {data} = await apiClient.post('/auth/login', credentials);
      localStorage.setItem('token', data.token)
      isAuthenticated = true;
      commit("setAuthError", '');
    } catch (e: any) {
      console.error('data error', credentials);
      commit("setAuthError", Object.values(e.response.data.first_errors).join(' '));
    }

    const hasIsAuthenticatedChanged = state.isAuthenticated !== isAuthenticated;
    hasIsAuthenticatedChanged && commit("setIsAuthenticated", isAuthenticated);
  },

  async logout({commit, state}) {
    let isAuthenticated = true;
    try {
      const {data} = await apiClient.post('/auth/logout');
      localStorage.setItem('token', '')
      isAuthenticated = false;
      commit("setAuthError", '');
    } catch (e) {
      console.error('data error', e)
    }

    const hasIsAuthenticatedChanged = state.isAuthenticated !== isAuthenticated;
    hasIsAuthenticatedChanged && commit("setIsAuthenticated", isAuthenticated);
  },

  async register({commit, state}, credentials) {
    let isAuthenticated = false;
    try {
      const {data} = await apiClient.post('/auth/register', credentials);
      localStorage.setItem('token', data.token);
      isAuthenticated = true;
      commit("setAuthError", '');
    } catch (e: any) {
      console.error('data error', credentials, e);
      commit("setAuthError", Object.values(e.response?.data.first_errors || ['Sorry, CORS is disabled!']).join(' '));

    }

    const hasIsAuthenticatedChanged = state.isAuthenticated !== isAuthenticated;
    hasIsAuthenticatedChanged && commit("setIsAuthenticated", isAuthenticated);
  },
};
