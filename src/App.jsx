import ReactGA from "react-ga4";
export const MEASUREMENT_ID = "G-K7FMRVVS50";
// **************** Static imports (needed immediately) **************
import SiteLayout from "./Components/SiteLayout/SiteLayout";
import Error from "./Pages/Error/Error";
// **************** Lazy-loaded page components **************
import { lazy } from "react";
const CommingSoon            = lazy(() => import("./Pages/ComingSoon/ComingSoon"));
const Home                   = lazy(() => import("./Pages/Homepage/Home"));
const GetInvolved            = lazy(() => import("./Pages/GetInvolved/GetInvolved"));
const OurSolutions           = lazy(() => import("./Pages/OurSolutions/OurSolutions"));
const ContactUs              = lazy(() => import("./Pages/ContactUs/ContactUs"));
const AboutUs                = lazy(() => import("./Pages/AboutUs/AboutUs"));
const SuccessStories         = lazy(() => import("./Pages/SuccessStories/SuccessStories"));
const Blog                   = lazy(() => import("./Pages/Blog/Blog_new"));
const Policy                 = lazy(() => import("./Pages/Policy/Policy"));
const Values                 = lazy(() => import("./Pages/Values/Values"));
const MayNewsletter          = lazy(() => import("./Pages/Newsletters/MayNewsletter"));
const June2025Newsletter     = lazy(() => import("./Pages/Newsletters/June2025"));
const Aug2025Newsletter      = lazy(() => import("./Pages/Newsletters/Aug2025"));
const October2025Newsletter  = lazy(() => import("./Pages/Newsletters/October2025"));
const November2025Newsletter = lazy(() => import("./Pages/Newsletters/November2025"));
const December2025Newsletter = lazy(() => import("./Pages/Newsletters/December2025"));
const January2026Newsletter  = lazy(() => import("./Pages/Newsletters/January2026"));
const February2026Newsletter = lazy(() => import("./Pages/Newsletters/February2026"));
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
        path: "values",
        element: <Values />,
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
        path: "newsletters/aug-2025",
        element: <Aug2025Newsletter />,
      },
      {
        path: "newsletters/oct-2025",
        element: <October2025Newsletter />,
      },
      {
        path: "newsletters/nov-2025",
        element: <November2025Newsletter />,
      },
      {
        path: "newsletters/dec-2025",
        element: <December2025Newsletter />,
      },
      {
        path: "newsletters/jan-2026",
        element: <January2026Newsletter />,
      },
      {
        path: "newsletters/feb-2026",
        element: <February2026Newsletter />,
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
  return (
    <main className=" overflow-x-hidden">
      <RouterProvider router={router} />
    </main>
  );
}
export default App;
