import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function LayoutHome() {
  return (
    <div className="grid grid-rows-[1fr_100px] overflow-hidden min-h-screen">
      <main className="overflow-y-scroll px-2 pt-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default LayoutHome;
