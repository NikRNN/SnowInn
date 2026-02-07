import { lazy } from "react";

export const ArticleDetailsPageLazy = lazy(
    () => new Promise(
        (resolve) => {
            setTimeout(
                // eslint-disable-next-line
                // @ts-expect-error

                () => resolve(import("./ArticleDetailsPage")),
                1500,
            );
        },
    ),
);
