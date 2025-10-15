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
import Blog from "./Pages/Blog/Blog_new";
import Policy from "./Pages/Policy/Policy";
import MayNewsletter from "./Pages/Newsletters/MayNewsletter";
import June2025Newsletter from "./Pages/Newsletters/June2025";
import Aug2025Newsletter from "./Pages/Newsletters/Aug2025";
import October2025Newsletter from "./Pages/Newsletters/October2025";
// ******************************************
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "getinvolved",
        element: <GetInvolved />,
      },
      {
        path: "oursolutions",
        element: <OurSolutions />,
      },
      {
        path: "about",
        // element: <Home />,
        element: <AboutUs />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "success_stories",
        element: <SuccessStories />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "non_dis_policy",
        element: <Policy />,
      },
      {
        path: "privacy_policy",
        element: <Policy />,
      },
      {
        path: "newsletters/may-2025",
        element: <MayNewsletter />,
      },
      {
        path: "newsletters/june-2025",
        element: <June2025Newsletter />,
      },
      {
        path: "newsletters/oct-2025",
        element: <October2025Newsletter />,
      },
      {
        path: "newsletters/aug-2025",
        element: <Aug2025Newsletter />,
      },
      {
        path: "comingsoon",
        element: <CommingSoon />,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    ReactGA.initialize(MEASUREMENT_ID);
  }, []);
  useEffect(() => {
    // Send a pageview event whenever the route changes
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: location.pathname, // Use the pathname as the title for simplicity
    });
  }, [location.pathname]);
  return (
    <main className=" overflow-x-hidden">
      <RouterProvider router={router} />
    </main>
  );
}
export default App;