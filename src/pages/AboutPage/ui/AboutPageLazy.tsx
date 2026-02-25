import { lazy } from "react";

export const AboutPageLazy = lazy(() => new Promise(
    (resolve) => {
        setTimeout(
            // eslint-disable-next-line
                // @ts-expect-error

            () => resolve(import("./AboutPage")),
            300,
        );
    },
));
