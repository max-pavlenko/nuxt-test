import {Context} from "@nuxt/types";

export default function ({store: {state}, redirect}: Context) {
  const isAuth = state.authentication.isAuthenticated;
  if (!isAuth) redirect('/auth/log-in')
}
