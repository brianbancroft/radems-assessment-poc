import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import AnimatedPage from "../components/AnimatedPage";

function LayoutHome() {
  return (
    <>
      <main className="mb-[125px] md:px-0 px-4 font-geist">
        <AnimatedPage>
          <Outlet />
        </AnimatedPage>
      </main>
      <Footer />
    </>
  );
}

export default LayoutHome;
