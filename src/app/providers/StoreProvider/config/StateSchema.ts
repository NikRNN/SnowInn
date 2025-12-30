import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";
import { CounterSchema } from "entities/Counter";

export interface StateSchema {
    user: UserSchema;
    loginForm: LoginSchema;
    counter: CounterSchema;
}
