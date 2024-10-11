import { FC } from "react";
import HomePage from "@/pages/Home/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./Layout";
import { setAuthToken } from "./Middlewares/setAuthTokens";
import FormInput from "./pages/FormInput";
import ConfirmAlert from "./pages/ConfirmAlert";
import AboutUs from "./pages/AboutUs";
import TermsOfService from "./pages/TermsOfService";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Blog1 from "./blogs/Blog1";
import Blog7 from "./blogs/Blog7";
import Blog8 from "./blogs/Blog8";
import Blog6 from "./blogs/Blog6";
import Blog5 from "./blogs/Blog5";
import Blog4 from "./blogs/Blog4";
import Blog3 from "./blogs/Blog3";
import Blog2 from "./blogs/Blog2";
// import ConfirmAlert1 from "./pages/ConfirmAlert1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blogs",
        children: [
          {
            path: '/blogs',
            element: <Blogs />
          },
          {
            path: '/blogs/:1',
            element: <Blog1 />
          },
          {
            path: '/blogs/:2',
            element: <Blog2 />
          },
          {
            path: '/blogs/:3',
            element: <Blog3 />
          },
          {
            path: '/blogs/:4',
            element: <Blog4 />
          },
          {
            path: '/blogs/:5',
            element: <Blog5 />
          },
          {
            path: '/blogs/:6',
            element: <Blog6 />
          },
          {
            path: '/blogs/:7',
            element: <Blog7 />
          },
          {
            path: '/blogs/:8',
            element: <Blog8 />
          },
        ]
      },
      {
        path:"/formInput",
        element: <FormInput/>
      },
      {
        path:"/confirmAlert",
        element: <ConfirmAlert />
      },
      {
        path:"/about",
        element:<AboutUs/>
      },
      {
        path:"/service",
        element:<TermsOfService/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      // {
      //   path:"/confirmAlert1",
      //   element: <ConfirmAlert1 />
      // },
    ],
  },
]);

const App: FC = () => {
  
  const token = localStorage.getItem("token");
  if (token) {
      setAuthToken(token);
  }

  return (
    <RouterProvider router={router} />
  );
};

export default App;
