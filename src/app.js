import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import About from "./components/about/About";
import Error from "./components/error/error";
import Contact from "./components/contact/Contact";
import RestrauntMenu from "./components/restraunt menu/RestrauntMenu";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restraunt/:resId",
        element: <RestrauntMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
