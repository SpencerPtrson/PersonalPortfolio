
import "./css/App.css";
import MainNav from "./Components/MainNav";
import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ErrorPage from "./pages/ErrorPage";
import PageContent from "./pages/Content";

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
    <>
      <MainNav />
      <IndexPage />
    </>
  );
}

export default App;
