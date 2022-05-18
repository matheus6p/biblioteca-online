import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { Router } from "./routes/routes";
import ThemeSwitch from "./components/ThemeSwitch";

function App() {
  return (
    <>
      <Router />
      <ToastContainer />
      <ThemeSwitch />
    </>
  );
}

export default App;
