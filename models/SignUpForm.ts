import {LoginForm} from "~/models/LoginForm";

export interface SignUpForm extends LoginForm {
  name: string,
}
