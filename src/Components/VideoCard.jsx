/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
//import { useSelector } from "react-redux";
import { useProfile } from "../utils/useProfile";
import { Link } from "react-router-dom";
import {
  formatDuration,
  getCountFormat,
  getDateFormat,
} from "../utils/constants";

const VideoCard = ({ video }) => {
  const { snippet, statistics, contentDetails } = video;
  const { publishedAt, channelId } = snippet;
  const { duration } = contentDetails;

  //const menu = useSelector((store) => store.app.isMenuOpen);
  //const style = menu ? "w-[360px]" : "w-[338px]";

  const profile = useProfile(channelId);
  return (
    <Link to={"/watch?v=" + video.id} state={video}>
      <div className="w-[360px] 2xl:w-[338px]">
        <div className="flex flex-col">
          <div className="aspect-video relative">
            <img
              src={snippet?.thumbnails?.maxres?.url}
              alt="thumbnail"
              className="w-full h-full rounded-lg"
            />
            <div className="absolute right-1 bottom-1 text-xs text-[#f1f1f1] bg-body-black px-1 py-0.5 rounded-[0.25rem] font-semibold">
              {formatDuration(duration)}
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <div className="basis-9 shrink-0 h-9">
              <img src={profile} alt="logo" className="rounded-full" />
            </div>
            <div className="flex flex-col">
              <p className="mb-1 two-line-ellipsis">{snippet?.title}</p>
              <p className="text-gray-400 text-sm ">{snippet?.channelTitle}</p>
              <div>
                <span className="text-gray-400 text-sm after:content-['•'] after:ml-1 after:mr-1">
                  {getCountFormat(statistics?.viewCount)} views
                </span>
                <span className="text-gray-400 text-sm">
                  {getDateFormat(publishedAt)} ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
