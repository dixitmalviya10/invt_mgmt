import { ShoppingCart } from "lucide-react";

const Home = () => {
  return (
    <div className="grid grid-nogutter gap-3">
      <div className="shadow-1 p-4 bg-white border-round-lg col">
        <div className="flex justify-content-between align-items-start mb-3">
          <div className="flex flex-column gap-3">
            <span className="text-secondary">Orders</span>
            <span>152</span>
          </div>
          <div className="text-main-primary bg-color-primary w-2rem h-2rem border-round-md flex justify-content-center align-items-center">
            <ShoppingCart size={20} />
          </div>
        </div>
        <div className="text-secondary">
          <span className="text-success">24 new</span> since last visit
        </div>
      </div>
      <div className="shadow-1 p-4 bg-white border-round-lg col">
        <div className="flex justify-content-between align-items-start mb-3">
          <div className="flex flex-column gap-3">
            <span className="text-secondary">Revenue</span>
            <span>$2.100</span>
          </div>
          <div className="text-main-primary bg-color-primary w-2rem h-2rem border-round-md flex justify-content-center align-items-center">
            <ShoppingCart size={20} />
          </div>
        </div>
        <div className="text-secondary">
          <span className="text-success">24 new</span> since last visit
        </div>
      </div>
      <div className="shadow-1 p-4 bg-white border-round-lg col">
        <div className="flex justify-content-between align-items-start mb-3">
          <div className="flex flex-column gap-3">
            <span className="text-secondary">Customers</span>
            <span>28441</span>
          </div>
          <div className="text-main-primary bg-color-primary w-2rem h-2rem border-round-md flex justify-content-center align-items-center">
            <ShoppingCart size={20} />
          </div>
        </div>
        <div className="text-secondary">
          <span className="text-success">24 new</span> since last visit
        </div>
      </div>
      <div className="shadow-1 p-4 bg-white border-round-lg col">
        <div className="flex justify-content-between align-items-start mb-3">
          <div className="flex flex-column gap-3">
            <span className="text-secondary">Products</span>
            <span>100</span>
          </div>
          <div className="text-main-primary bg-color-primary w-2rem h-2rem border-round-md flex justify-content-center align-items-center">
            <ShoppingCart size={20} />
          </div>
        </div>
        <div className="text-secondary">
          <span className="text-success">24 new</span> since last visit
        </div>
      </div>
    </div>
  );
};

export default Home;
