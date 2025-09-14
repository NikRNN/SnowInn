import { Link, LinkProps } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames.js";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
  const {
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.appLink, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
