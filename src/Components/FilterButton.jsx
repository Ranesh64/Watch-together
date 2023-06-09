/* eslint-disable react/prop-types */
const FilterButton = ({ txt }) => {
  return txt == "All" ? (
    <div>
      <button className="text-sm font-semibold py-1.5 px-3 rounded-lg bg-white text-black">
        {txt}
      </button>
    </div>
  ) : (
    <div>
      <button className="text-sm font-semibold py-1.5 px-3 rounded-lg bg-zinc-800 whitespace-nowrap">
        {txt}
      </button>
    </div>
  );
};

export default FilterButton;
