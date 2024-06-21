// **************** Components **************
import SiteLayout from "./Components/SiteLayout/SiteLayout";
import Home from "./Pages/Homepage/Home";
import GetInvolved from "./Pages/GetInvolved/GetInvolved";

// ******************************************
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
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
    ],
  },
]);

function App() {
  return (
    <main className=" overflow-x-hidden">
      {/* <Navbar /> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </main>
  );
}

export default App;
