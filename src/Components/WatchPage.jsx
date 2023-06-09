import RecommendedVideos from "./RecommendedVideos";
import VideoPlayer from "./VideoPlayer";

const WatchPage = () => {
  return (
    <div className=" flex mt-20 mx-8 gap-x-4">
      <VideoPlayer />
      <RecommendedVideos />
    </div>
  );
};

export default WatchPage;
