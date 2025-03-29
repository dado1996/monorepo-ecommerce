import { RouterProvider } from "react-router";
import { router } from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="mt-0 mx-5">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
