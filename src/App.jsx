import ReactGA from "react-ga4";
const MEASUREMENT_ID = "G-K7FMRVVS50";

// **************** Components **************
import SiteLayout from "./Components/SiteLayout/SiteLayout";
import Error from "./Pages/Error/Error";
import CommingSoon from "./Pages/ComingSoon/ComingSoon";
import Home from "./Pages/Homepage/Home";
import GetInvolved from "./Pages/GetInvolved/GetInvolved";
import OurSolutions from "./Pages/OurSolutions/OurSolutions";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import SuccessStories from "./Pages/SuccessStories/SuccessStories";
import Blog from "./Pages/Blog/Blog";
import Blog_new from "./Pages/Blog/Blog_new";
import Policy from "./Pages/Policy/Policy";
import Careers from "./Pages/Careers/Careers";
import JobApplicationForm from "./Pages/Careers/JobApplicationForm"; // ✅ NEW

// ****************************************** 
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";

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
      { path: "blog", element: <Blog_new /> },
      { path: "non_dis_policy", element: <Policy /> },
      { path: "comingsoon", element: <CommingSoon /> },
      {
        path: "careers",
        children: [
          { index: true, element: <Careers /> },
          { path: "apply/:jobSlug", element: <JobApplicationForm /> }, // ✅ NEW
        ],
      },
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
      page: location.pathname,
      title: location.pathname,
    });
  }, [location.pathname]);

  return (
    <main className="overflow-x-hidden">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
