import { FC } from "react";
import HomePage from "@/pages/Home/HomePage";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./Layout";
import { setAuthToken } from "./Middlewares/setAuthTokens";
import FormInput from "./pages/FormInput";
import ConfirmAlert from "./pages/ConfirmAlert";
import AboutUs from "./pages/AboutUs";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./components/Contact";
import Blog1 from "./blogs/Blog1";
import Blog7 from "./blogs/Blog7";
import Blog8 from "./blogs/Blog8";
import Blog6 from "./blogs/Blog6";
import Blog5 from "./blogs/Blog5";
import Blog4 from "./blogs/Blog4";
import Blog3 from "./blogs/Blog3";
import Blog2 from "./blogs/Blog2";
import BlogLayout from "./Layout/BlogLayout";
import Blog9 from "./blogs/Blog9";
import Blog10 from "./blogs/Blog10";
import Blog11 from "./blogs/Blog11";
import Blog12 from "./blogs/Blog12";
import Blog13 from "./blogs/Blog13";
import Blog14 from "./blogs/Blog14";
import Blog15 from "./blogs/Blog15";
import Blog16 from "./blogs/Blog16";
import BlogsPage1 from "./components/Blogs/BlogsPage1";
import BlogsPage2 from "./components/Blogs/BlogsPage2";
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
        element: <BlogLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/blogs/page1" replace />
          },
          {
            path: '/blogs/page1',
            element: <BlogsPage1 />,
          },
          {
            path: '/blogs/page2',
            element: <BlogsPage2 />,
          },
          {
            path: "/blogs/page1/1",
            element: <Blog1 />
          },
          {
            path: "/blogs/page1/2",
            element: <Blog2 />
          },
          {
            path: "/blogs/page1/3",
            element: <Blog3 />
          },
          {
            path: "/blogs/page1/4",
            element: <Blog4 />
          },
          {
            path: "/blogs/page1/5",
            element: <Blog5 />
          },
          {
            path: "/blogs/page1/6",
            element: <Blog6 />
          },
          {
            path: "/blogs/page1/7",
            element: <Blog7 />
          },
          {
            path: "/blogs/page1/8",
            element: <Blog8 />
          },
          {
            path: "/blogs/page1/9",
            element: <Blog9 />
          },
          {
            path: "/blogs/page1/10",
            element: <Blog10 />
          },
          {
            path: "/blogs/page2/11",
            element: <Blog11 />
          },
          {
            path: "/blogs/page2/12",
            element: <Blog12 />
          },
          {
            path: "/blogs/page2/13",
            element: <Blog13 />
          },
          {
            path: "/blogs/page2/14",
            element: <Blog14 />
          },
          {
            path: "/blogs/page2/15",
            element: <Blog15 />
          },
          {
            path: "/blogs/page2/16",
            element: <Blog16 />
          },
        ]
      },
      {
        path: "/formInput",
        element: <FormInput />
      },
      {
        path: "/confirmAlert",
        element: <ConfirmAlert />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/service",
        element: <TermsOfService />
      },
      {
        path: "/contact",
        element: <Contact />
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
