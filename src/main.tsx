import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "app/providers/ErrorBoundary/index.js";
import { StoreProvider } from "app/providers/StoreProvider/index.js";
import App from "./app/App.js";
import { ThemeProvider } from "./app/providers/ThemeProvider/index.js";
import "shared/config/i18n/i18n.js";
import "app/styles/index.scss";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,

);
