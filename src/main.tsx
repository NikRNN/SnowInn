import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "app/App.js";
import { ThemeProvider } from "app/providers/ThemeProvider/index.js";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
