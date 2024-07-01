import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

const SiteLayout = () => {
  return (
    <div>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};
export default SiteLayout;
