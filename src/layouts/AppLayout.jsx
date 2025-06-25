// import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const AppLayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main>
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </main>
  );
};
export default AppLayout;
