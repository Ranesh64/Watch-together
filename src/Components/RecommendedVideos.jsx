import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../utils/videoListSlice";
import RecommendedVideoCard from "./RecommendedVideoCard";
import FilterButton from "./FilterButton";

const RecommendedVideos = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.videoList.data);
  const filters = ["All", "Related", "Computer science", "Vlogs", "Fashion"];

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return !videos ? null : (
    <div className="flex flex-col gap-y-3 w-[416px] flex-grow-0 shrink">
      <div className="flex gap-x-3 w-[416px]">
        {filters.map((filter, index) => {
          return <FilterButton key={index} txt={filter} />;
        })}
      </div>
      {videos.map((video) => {
        return <RecommendedVideoCard key={video.id} video={video} />;
      })}
    </div>
  );
};

export default RecommendedVideos;
