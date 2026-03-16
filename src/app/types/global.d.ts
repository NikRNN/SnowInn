declare const __IS_DEV: boolean;

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.scss";

declare module "*.sass" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.svg" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}

export type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
// eslint-disable-next-line
    // @ts-ignore 
// eslint-disable-next-line
type CustomOptionalRecord<K extends keyof any, T> = { [P in K]?: T; } //ts ругается на встроенный тип Record
