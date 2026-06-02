import "app/styles/index.scss";
import { Decorator } from "@storybook/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

// export const RouterDecorator: Decorator = (Story) => (
//     <BrowserRouter>
//         <Routes>
//             <Route path="/*" element={<Story />} />
//         </Routes>
//     </BrowserRouter>

// );

export const RouterDecorator = (
    initialPath: string,
    routePath: string
): Decorator => function(Story) {
    return <MemoryRouter initialEntries={[initialPath]}>
        <Routes>
            <Route path={routePath} element={<Story />} />
        </Routes>
    </MemoryRouter>
};