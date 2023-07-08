import { useEffect } from "react";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../utils/videoSlice";
import HomeShimmer from "./HomeShimmer";

const CardContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.video.data);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  console.log(videos);

  return !videos ? (
    <div className="flex flex-wrap gap-x-4 gap-y-8 justify-center">
      <HomeShimmer />
    </div>
  ) : (
    <div className="flex flex-wrap gap-x-4 gap-y-8 justify-center">
      {videos.map((video) => {
        return <VideoCard key={video.id} video={video} />;
      })}
    </div>
  );
};

export default CardContainer;
