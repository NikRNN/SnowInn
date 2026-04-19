import { lazy } from "react";

export const ArticleEditPageLazy = lazy(
    () => new Promise(
        (resolve) => {
            setTimeout(
                // eslint-disable-next-line
                // @ts-expect-error

                () => resolve(import("./ArticleEditPage")),
                300,
            );
        },
    ),
);
