import { Outlet } from "react-router";
import Header from "../components/header/Header";
import { MobileSidePanel, Sidepanel } from "../components/sidepanel/Sidepanel";
import { useState } from "react";
import { useWindowWidth } from "../hooks/useWindowWidth";

const MainLayout = () => {
  const windowWidth = useWindowWidth();
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Header setVisible={setVisible} />
      <div className="pt-8 relative">
        {windowWidth > 991 ? (
          <div
            className={`fixed left-0 z-5 transition-transform transition-duration-300 transition-ease-in-out ${
              visible ? "-translate-x-100" : "translate-x-0"
            }`}>
            <Sidepanel visible={visible} />
          </div>
        ) : (
          <MobileSidePanel visible={visible} setVisible={setVisible} />
        )}
        <main
          className={` mt-2 mb-4 ${
            windowWidth > 991
              ? `transition-all transition-duration-300 transition-ease-in-out ${
                  visible ? "mx-4" : "content-left-margin mr-4"
                } flex-1`
              : "mx-4"
          }`}>
          <div className="container">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
