import { lazy } from "react";

export const ArticlesPageLazy = lazy(
    () => new Promise(
        (resolve) => {
            setTimeout(
                // eslint-disable-next-line
                // @ts-expect-error

                () => resolve(import("./ArticlesPage")),
                1500,
            );
        },
    ),
);
