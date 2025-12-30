import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { LoginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState.ts/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { UseAppDispatch } from "app/providers/StoreProvider/lib/UseAppDispatch";
import { Text, TextTheme } from "shared/ui/Text/Text";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;

}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = UseAppDispatch(); // кастомный хук для работы с thunk

    const onChangeLogin = useCallback((value: string) => { dispatch(LoginActions.setUsername(value)); }, [dispatch]);
    const onChangePassword = useCallback((value: string) => { dispatch(LoginActions.setPassword(value)); }, [dispatch]);

    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState); // получаю состояние из стейта

    const onLoginOnClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
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
    );
});
