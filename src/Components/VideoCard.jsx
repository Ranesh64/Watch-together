/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useSelector } from "react-redux";
import { useProfile } from "../utils/useProfile";
import { Link } from "react-router-dom";


const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { publishedAt, channelId } = snippet;

  const menu = useSelector((store) => store.app.isMenuOpen);
  const style = menu ? "w-[360px]" : "w-[338px]";

  const profile = useProfile(channelId);

  const getViewCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M";
    } else if (count >= 1000) {
      return Math.round(count / 1000) + "k";
    } else {
      return count.toString();
    }
  };

  const getdays = (time) => {
    let startDate = new Date(time.toString());
    let endDate = new Date();

    let timeDiff = endDate.getTime() - startDate.getTime(); //In Milliseconds

    let minutesDiff = timeDiff / (1000 * 60); //In Minutes

    if (minutesDiff >= 1440) {
      const days = Math.floor(minutesDiff / (60 * 24));
      if (days >= 365) {
        return Math.floor(days / 365) + " years";
      } else if (days >= 30) {
        return Math.floor(days / 30) + " months";
      } else {
        return days + " days";
      }
    } else if (minutesDiff >= 60) {
      return Math.floor(minutesDiff / 60) + " hours";
    } else {
      return minutesDiff + " minutes";
    }
  };
  return (
    <Link to={"/watch?v=" + video.id} state={video}>
      <div className={style}>
        <div className="flex flex-col">
          <div className="w-full h-52">
            <img
              src={snippet?.thumbnails?.medium?.url}
              alt="thumbnail"
              className="w-full h-full rounded-lg"
            />
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
                  {getViewCount(statistics?.viewCount)} views
                </span>
                <span className="text-gray-400 text-sm">
                  {getdays(publishedAt)} ago
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
