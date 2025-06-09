import ReactGA from "react-ga4";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";

const MEASUREMENT_ID = "G-K7FMRVVS50";

import SiteLayout from "./Components/SiteLayout/SiteLayout";
import Error from "./Pages/Error/Error";
import CommingSoon from "./Pages/ComingSoon/ComingSoon";
import Home from "./Pages/Homepage/Home";
import GetInvolved from "./Pages/GetInvolved/GetInvolved";
import OurSolutions from "./Pages/OurSolutions/OurSolutions";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import SuccessStories from "./Pages/SuccessStories/SuccessStories";
import Blog from "./Pages/Blog/Blog_new";
import Policy from "./Pages/Policy/Policy";
import MayNewsletter from "./Pages/Newsletters/MayNewsletter";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import ForgotPassword from "./Pages/Auth/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "getinvolved", element: <GetInvolved /> },
      { path: "oursolutions", element: <OurSolutions /> },
      { path: "about", element: <AboutUs /> },
      { path: "contactus", element: <ContactUs /> },
      { path: "success_stories", element: <SuccessStories /> },
      { path: "blog", element: <Blog /> },
      { path: "non_dis_policy", element: <Policy /> },
      { path: "newsletters/may-2025", element: <MayNewsletter /> },
      { path: "comingsoon", element: <CommingSoon /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "forgot-password", element: <ForgotPassword /> },
    ],
  },
]);

function App() {
  useEffect(() => {
    ReactGA.initialize(MEASUREMENT_ID);
  }, []);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: window.location.pathname,
    });
  }, [window.location.pathname]);

  return (
    <main className="overflow-x-hidden">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
