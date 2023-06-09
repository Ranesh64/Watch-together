import FilterButtonList from "./FilterButtonList";
import CardContainer from "./CardContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col gap-4">
      <FilterButtonList />
      <CardContainer />
    </div>
  );
};

export default MainContainer;
