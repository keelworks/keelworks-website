// Updated imports with correct paths
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

// Auth pages
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import UserDashboard from "./Pages/Auth/UserDashboard";
import AdminDashboard from "./Pages/Auth/AdminDashboard";
import UnauthorizedPage from "./Pages/Auth/UnauthorizedPage";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

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
        element: <Blog_new />,
      },
      {
        path: "non_dis_policy",
        element: <Policy />,
      },
      {
        path: "comingsoon",
        element: <CommingSoon />,
      },
      // Auth routes
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "user-dashboard",
        element: <ProtectedRoute><UserDashboard /></ProtectedRoute>,
      },
      {
        path: "admin-dashboard",
        element: <ProtectedRoute requiredRole="Admin"><AdminDashboard /></ProtectedRoute>,
      },
      {
        path: "unauthorized",
        element: <UnauthorizedPage />,
      }
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
    <main className="overflow-x-hidden">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;