import { lazy, FC } from "react";

export const AddNewCommentLazy = lazy(() => new Promise((resolve) => {
    // eslint-disable-next-line
    // @ts-ignore 
    // eslint-disable-next-line
        setTimeout(() => resolve(import("./AddNewComment")), 1500);
}));
