import { Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";

import { AboutPageLazy } from "pages/AboutPage/index.js";
import { MainPageLazy } from "pages/MainPage/index.js";

import "./styles/index.scss";
import { UseTheme } from "app/providers/ThemeProvider/index.js";
import { classNames } from "shared/lib/classNames/classNames.js";

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
