import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "app/providers/ErrorBoundary/index.js";
import App from "./app/App.js";
import { ThemeProvider } from "./app/providers/ThemeProvider/index.js";

import "shared/config/i18n/i18n.js";

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,

    document.getElementById("root"),
);
