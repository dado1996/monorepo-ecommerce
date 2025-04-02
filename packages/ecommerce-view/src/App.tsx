import { BrowserRouter } from "react-router";
import { Router } from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/app.css";

function App() {
  return (
    <div className="mt-0 mx-5 h-100">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
