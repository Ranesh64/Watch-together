import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex mt-[55px] gap-4 mx-3">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
