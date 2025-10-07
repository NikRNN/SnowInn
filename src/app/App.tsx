import { Suspense } from "react";
import { UseTheme } from "app/providers/ThemeProvider/index.js";
import { classNames } from "shared/lib/classNames/classNames.js";
import { AppRouter } from "app/providers/router/index.js";
import { Navbar } from "widgets/NavBar/index.js";
import { Sidebar } from "widgets/Sidebar/index.js";
import "./styles/index.scss";

function App() {
    const { theme } = UseTheme();

    return (
        <div className={classNames("app", [theme])}>
            <Suspense fallback="">
                <Navbar />

                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
