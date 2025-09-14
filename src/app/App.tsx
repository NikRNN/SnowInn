import { Link } from "react-router-dom";
import { UseTheme } from "app/providers/ThemeProvider/index.js";
import { classNames } from "shared/lib/classNames/classNames.js";
import { AppRouter } from "app/providers/router/index.js";
import "./styles/index.scss";

function App() {
  const { theme, toggleTheme } = UseTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <AppRouter />
    </div>
  );
}

export default App;
