import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AIService from "../pages/Services/AIService";
import HardwareService from "../pages/Services/HardwareService";
import SoftwareService from "../pages/Services/SoftwareService";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import PortfoliosLeft from "../components/Portfolio/PortfoliosLeft";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        children: [
          {
            path: "ai",
            element: <AIService />,
          },
          {
            path: "hardware",
            element: <HardwareService />,
          },
          {
            path: "software",
            element: <SoftwareService />,
          },
        ],
      },
      {
        path: "portfolios",
        element: <Portfolio />,
        children: [
          {
            path: ":id",
            element: <PortfoliosLeft />,
          },
        ],
      },
      // {
      //   path: "blog",
      //   element: <Blog />,
      // },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);
