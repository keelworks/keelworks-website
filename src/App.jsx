// **************** Components **************
import SiteLayout from "./Components/SiteLayout/SiteLayout";
import Error from "./Pages/Error/Error";
import CommingSoon from "./Pages/ComingSoon/ComingSoon";
import Home from "./Pages/Homepage/Home";
import GetInvolved from "./Pages/GetInvolved/GetInvolved";
import OurSolutions from "./Pages/OurSolutions/OurSolutions";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";

// ******************************************
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
        path: "comingsoon",
        element: <CommingSoon />,
      },
    ],
  },
]);

function App() {
  return (
    <main className=" overflow-x-hidden">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
