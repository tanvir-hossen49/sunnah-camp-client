import { Outlet } from "react-router-dom";
import Footer from "../page/Shared/Footer";
import NavigationBar from "../page/Shared/NavigationBar";

const MainLayout = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
