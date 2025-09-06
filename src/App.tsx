import { Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";

// import { Counter } from "./components/Counter.jsx";
import { AboutPageLazy } from "./pages/AboutPage/AboutPageLazy.js";
import { MainPageLazy } from "./pages/MainPage/MainPageLazy.js";
import "./index.scss";

function App() {
  return (
    <div className="app">
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route element={<AboutPageLazy />} path={"/about"} />
          <Route element={<MainPageLazy />} path={"/"} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
