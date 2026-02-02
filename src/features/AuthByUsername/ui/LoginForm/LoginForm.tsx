import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { LoginActions, LoginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState.ts/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { DynamicSomethingLoader, ReducersList } from "shared/lib/component/DynamicSomethingLoader";
import cls from "./LoginForm.module.scss";

export interface LoginFormProps {
  className?: string;
  onSuccess: ()=>void;
}

const initialReducers: ReducersList = {
    loginForm: LoginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation("loginForm");
    const dispatch = useAppDispatch(); // кастомный хук для работы с thunk

    const onChangeLogin = useCallback((value: string) => { dispatch(LoginActions.setUsername(value)); }, [dispatch]);
    const onChangePassword = useCallback((value: string) => { dispatch(LoginActions.setPassword(value)); }, [dispatch]);

    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState); // получаю состояние из стейта

    const onLoginOnClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        console.log(result);
        if (result.meta.requestStatus === "fulfilled") {
            console.log(onSuccess);
            onSuccess();
        }
    }, [dispatch, username, password, onSuccess]);

    return (
        <DynamicSomethingLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, [className])}>

                {error && <Text text={error} theme={TextTheme.ERROR} />}

                <Input
                    autoFocus
                    className={cls.input}
                    type="text"
                    placeholder={t("Введите логин")}
                    onChange={onChangeLogin}
                    value={username}
                />
                <Input
                    className={cls.input}
                    type="text"
                    placeholder={t("Введите пароль")}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginOnClick}
                    disabled={isLoading}
                >
                    {t("Войти")}
                </Button>
            </div>

        </DynamicSomethingLoader>

    );
});

export default LoginForm;
