const Shimmer = () => {
  return (
    <div className="w-[360px]">
      <div className="flex flex-col gap-y-2">
        <div className="w-full h-52 bg-neutral-800 rounded-lg"></div>
        <div className="flex gap-x-2">
          <div className="h-9 w-9 rounded-full bg-neutral-800"></div>
          <div className="flex flex-col flex-grow gap-y-2">
            <div className=" p-3 bg-neutral-800 w-4/5 rounded-md"></div>
            <div className="p-3 bg-neutral-800 w-3/5 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeShimmer = () => {
  return (
    <>
      {Array(9)
        .fill("")
        // eslint-disable-next-line no-unused-vars
        .map((e, index) => (
          <Shimmer key={index} />
        ))}
    </>
  );
};
export default HomeShimmer;
