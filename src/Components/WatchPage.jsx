import { useSelector, useDispatch } from "react-redux";
import RecommendedVideos from "./RecommendedVideos";
import VideoPlayer from "./VideoPlayer";
import WatchTogether from "./WatchTogether";
import { io } from "socket.io-client";
import { showChat } from "../utils/appSlice";
import { SOCKET_SERVER } from "../utils/constants";
// import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const WatchPage = ({ watchEnable }) => {
  const dispatch = useDispatch();
  if (watchEnable) {
    dispatch(showChat());
  }
  const chat = useSelector((store) => store.app.showChat);
  const videoPlayerSocket = chat ? io(SOCKET_SERVER) : null;
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
