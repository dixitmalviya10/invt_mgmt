import { BadgeDollarSign, House, Package } from "lucide-react";
import { Sidebar } from "primereact/sidebar";
import NavigateLink from "./NavigateLink";

const navList = [
  { label: "Dashboard", navTo: "/", icon: <House /> },
  { label: "Products", navTo: "/products", icon: <Package /> },
  { label: "Sales", navTo: "/sales", icon: <BadgeDollarSign /> },
];
export const MobileSidePanel: React.FC<{
  visible: boolean;
  setVisible: (_a: boolean) => void;
}> = ({ visible, setVisible }) => {
  return (
    <Sidebar header="SAKAI" visible={visible} onHide={() => setVisible(false)}>
      <nav>
        <ul>
          {navList.map((data) => (
            <NavigateLink key={data.label} navTo={data.navTo}>
              {data.icon} <span>{data.label}</span>
            </NavigateLink>
          ))}
        </ul>
      </nav>
    </Sidebar>
  );
};

export const Sidepanel = () => {
  return (
    <aside
      className={`mt-2 mb-4 shadow-1 ml-4 p-2 bg-white border-round-lg max-w-20rem overflow-y-auto flex flex-column justify-content-between h-custom`}>
      <nav>
        <ul>
          {navList.map((data) => (
            <NavigateLink key={data.label} navTo={data.navTo}>
              {data.icon} <span>{data.label}</span>
            </NavigateLink>
          ))}
        </ul>
      </nav>
      <div>
        <img
          src="/assets/images/dancing-imposter.gif"
          alt="dancing-imposter"
          width={"100%"}
        />
      </div>
    </aside>
  );
};
