import { Outlet } from "react-router";
import Header from "../components/header/Header";
import { Sidepanel } from "../components/sidepanel/Sidepanel";
import { useState } from "react";

const MainLayout = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div>
      <Header setVisible={setVisible} />
      <div className="pt-8 relative">
        <div
          className={`fixed left-0 z-5 transition-transform transition-duration-300 transition-ease-in-out ${
            visible ? "-translate-x-100" : "translate-x-0"
          }`}>
          <Sidepanel visible={visible} />
        </div>
        <main
          className={`mt-2 mb-4 transition-all transition-duration-300 transition-ease-in-out ${
            visible ? "mx-4" : "content-left-margin mr-4"
          } flex-1`}>
          <div className="container">
            <Outlet />
          </div>
        </main>
      </div>
      {/* <MobileSidePanel {...props} /> */}
    </div>
  );
};

export default MainLayout;
