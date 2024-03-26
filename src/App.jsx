
import "./css/App.css";
import MainNav from "./components/MainNav";
import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<IndexPage />} errorElement={<ErrorPage />}>
        <Route
          index
          element={<IndexPage />}
        />
      </Route>
    )
  );

  return (
    <div style={{ backgroundColor: "red"}}>
      <MainNav />
      <IndexPage />
    </div>
  );
}

export default App;
