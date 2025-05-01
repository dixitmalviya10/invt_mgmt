import { Grid2x2X, House } from "lucide-react";
import { Sidebar } from "primereact/sidebar";
import NavigateLink from "./NavigateLink";
import { Visible } from "../../types";

export const MobileSidePanel: React.FC<{
  visible: boolean;
  setVisible: (_a: boolean) => void;
}> = ({ visible, setVisible }) => {
  return (
    <Sidebar visible={visible} onHide={() => setVisible(false)}>
      <h2>Sidebar</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </Sidebar>
  );
};

export const Sidepanel: React.FC<Visible> = ({ visible }) => {
  const navList = [
    { label: "Dashboard", navTo: "/", icon: <House /> },
    { label: "Products", navTo: "/products", icon: <Grid2x2X /> },
    { label: "Sales", navTo: "/sales", icon: <Grid2x2X /> },
  ];
  return (
    <aside
      className={`mt-2 mb-4 shadow-1 ml-4 p-2 bg-white border-round-lg flex-1 max-w-20rem overflow-y-auto h-custom ${
        visible ? "hidden" : "block"
      }`}>
      <nav>
        <ul>
          {navList.map((data) => (
            <NavigateLink navTo={data.navTo}>
              {data.icon} <span>{data.label}</span>
            </NavigateLink>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
