import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex mt-[55px] gap-4 mx-3">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
