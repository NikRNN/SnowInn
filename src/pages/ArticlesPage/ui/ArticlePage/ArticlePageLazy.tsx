import { lazy } from "react";

export const ArticlePageLazy = lazy(
    () => new Promise(
        (resolve) => {
            setTimeout(
                // eslint-disable-next-line
                // @ts-expect-error

                () => resolve(import("./ArticlePage")),
                1500,
            );
        },
    ),
);
