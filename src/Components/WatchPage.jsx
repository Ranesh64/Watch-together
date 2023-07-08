import { useSelector } from "react-redux";
import RecommendedVideos from "./RecommendedVideos";
import VideoPlayer from "./VideoPlayer";
import WatchTogether from "./WatchTogether";
import { io } from "socket.io-client";
// import { Outlet } from "react-router-dom";

const WatchPage = () => {
  const chat = useSelector((store) => store.app.showChat);
  const videoPlayerSocket = chat ? io("http://localhost:8000") : null;
  return (
    <>
      <div className=" flex mt-20 mx-8 gap-x-6">
        <VideoPlayer socket={videoPlayerSocket} />
        <div className="flex flex-col gap-y-6 flex-grow-0 shrink-0">
          {chat ? <WatchTogether socket={videoPlayerSocket} /> : null}
          {/* <Outlet /> */}
          <RecommendedVideos />
        </div>
      </div>
    </>
  );
};

export default WatchPage;
