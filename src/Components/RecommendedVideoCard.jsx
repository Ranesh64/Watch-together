import { Link } from "react-router-dom";
import {
  formatDuration,
  getCountFormat,
  getDateFormat,
} from "../utils/constants";
/* eslint-disable react/prop-types */
const RecommendedVideoCard = ({ video }) => {
  const { snippet, statistics, contentDetails } = video;
  const { publishedAt } = snippet;
  const { duration } = contentDetails;

  return (
    <Link to={"/watch?v=" + video.id}>
      <div className="flex gap-1.5">
        <div className="w-[168px] h-[94px] shrink-0 relative">
          <img
            src={snippet?.thumbnails?.medium?.url}
            alt="thumbnail"
            className="w-full h-full object-contain rounded-lg"
          />
          <div className="absolute right-1 bottom-1 text-xs text-[#f1f1f1] bg-body-black px-1 py-0.5 rounded-[0.25rem] font-semibold">
            {formatDuration(duration)}
          </div>
        </div>
        <div className="flex flex-col shrink-1">
          <p className="text-sm font-semibold two-line-ellipsis mb-2 tracking-wide">
            {snippet?.title}
          </p>
          <p className="text-gray-400 text-xs font-medium mb-1">
            {snippet?.channelTitle}
          </p>
          <p className="text-gray-400 text-xs ">
            {getCountFormat(statistics?.viewCount)} views
            <span className="text-gray-400 text-xs before:content-['•'] before:ml-1 before:mr-1">
              {getDateFormat(publishedAt)} ago
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecommendedVideoCard;
