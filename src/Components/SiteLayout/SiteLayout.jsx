import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import KeelBot from "../KeelBot/KeelBot";
import { useEffect } from "react";
import ReactGA from "react-ga4";

const SiteLayout = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: document.title,
    });
  }, [location.pathname]);

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
