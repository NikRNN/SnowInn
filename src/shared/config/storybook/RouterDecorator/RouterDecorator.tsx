import "app/styles/index.scss";
import { Decorator } from "@storybook/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const RouterDecorator: Decorator = (Story) => (
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={<Story />} />
        </Routes>
    </BrowserRouter>
);
