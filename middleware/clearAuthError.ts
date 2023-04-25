import {Context} from "@nuxt/types";

export default function ({store: {commit}}: Context) {
  commit("authentication/setAuthError", '');
}
