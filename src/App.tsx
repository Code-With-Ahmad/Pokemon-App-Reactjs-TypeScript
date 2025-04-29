import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <PageNotFound />,
      children: [
        { path: "/", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "/pokemon/:pokemonName", element: <Detail /> },
      ],
    },
    { path: "*", element: <PageNotFound /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
