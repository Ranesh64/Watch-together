import FilterButton from "./FilterButton";

const FilterButtonList = () => {
  const filterlist = [
    "All",
    "For you",
    "Programming",
    "Machine learning",
    "Movies",
    "Cricket",
    "Sports",
    "AR rahman",
    "Programming",
    "Machine learning",
    "Movies",
    "Cricket",
    "Sports",
    "AR rahman",
    "Programming",
    "Machine learning",
    "Movies",
  ];
  return (
    <div className="basis-16 shrink-0">
      <div className="fixed flex gap-x-3 h-16 items-center bg-body-black flex-nowrap z-10">
        {filterlist.map((value, index) => {
          return <FilterButton key={index} txt={value} />;
        })}
      </div>
    </div>
  );
};

export default FilterButtonList;
