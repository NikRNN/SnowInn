import { Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";

import { AboutPageLazy } from "./pages/AboutPage/AboutPageLazy.js";
import { MainPageLazy } from "./pages/MainPage/MainPageLazy.js";

import "./styles/index.scss";
import { UseTheme } from "./theme/useTheme.js";
import { classNames } from "./helpers/classNames/classNames.js";

function App() {
  const { theme, toggleTheme } = UseTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <Suspense fallback={<div>Загрузка</div>}>
        <Routes>
          <Route element={<AboutPageLazy />} path={"/about"} />
          <Route element={<MainPageLazy />} path={"/"} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
