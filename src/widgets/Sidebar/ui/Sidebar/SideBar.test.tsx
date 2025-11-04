import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { componentRender } from "shared/lib/tests/componentRender/componentRender.js";
import { Sidebar } from "./Sidebar.js";

describe("SideBar", () => {
    test("render text", () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("Sidebar toggle", () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        const elem = screen.getByTestId("sidebar");
        expect(elem.className).toMatch(/collapsed/);
    });
});
