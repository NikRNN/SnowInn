import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithTranslationt } from "shared/lib/tests/renderWithTranslation/renderWithTranslation.js";
import { Sidebar } from "./Sidebar.js";

describe("SideBar", () => {
    test("render text", () => {
        renderWithTranslationt(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("Sidebar toggle", () => {
        renderWithTranslationt(<Sidebar />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        const elem = screen.getByTestId("sidebar");
        expect(elem.className).toMatch(/collapsed/);
    });
});
