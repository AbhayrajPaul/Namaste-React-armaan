import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import About from "./components/about/About";
import Error from "./components/error/error";
import Contact from "./components/contact/Contact";
import RestrauntMenu from "./components/restraunt menu/RestrauntMenu";
import Login from "./components/Forms/Login";
// import Profile from "./components/about/Profile";
// import ClothesVilla from "./VillaClothes/ClothesVilla";

const ClothesVilla = lazy(() => import("./VillaClothes/ClothesVilla"));

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
        // children: [
        //   {
        //     path: "profile",
        //     element: <Profile />,
        //   },
        // ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restraunt/:resId",
        element: <RestrauntMenu />,
      },
      {
        path: "/clothesvilla",
        element: (
          <Suspense fallback={<h1>Loadingggg.......</h1>}>
            {" "}
            <ClothesVilla />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
