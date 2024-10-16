import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import { Outlet, ScrollRestoration } from "react-router-dom";
import KeelBot from "../KeelBot/KeelBot";

const SiteLayout = () => {
  return (
    <div>
      <Navbar />
      {/* <KeelBot /> */}
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};
export default SiteLayout;
