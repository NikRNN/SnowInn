import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import { ThemeProvider } from "./theme/ThemeProvider.js";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
