import { Outlet } from "react-router-dom";
import Footer from "../page/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
