import { lazy } from "react";

export const ProfilePageLazy = lazy(
    () => new Promise(
        (resolve) => {
            setTimeout(
                // eslint-disable-next-line
                // @ts-expect-error

                () => resolve(import("./ProfilePage")),
                1500,
            );
        },
    ),
);
