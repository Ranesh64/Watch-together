import moment from "moment";

//export const API_KEY = "AIzaSyCgVgxyZBE9X-4vlh7uP220wvdmO67ROxU";
export const API_KEY = "AIzaSyCwM1vYpUmPxFKz3P8iKgqvvZUR9pIm4U8";
export const YOUTUBE_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=" +
  API_KEY;

export const CHANNEL_DATA_URL =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY +
  "&id=";

export const SEARCH_SUGGESTIONS_URL =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const COMMENTS_URL =
  " https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&key=" +
  API_KEY +
  "&videoId=";

export const RELATED_VIDEOS_URL =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=relevance&type=video&maxResults=48&key=" +
  API_KEY +
  "&relatedToVideoId=";

export const SEARCH_BY_QUERY_URL =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&key=" +
  API_KEY +
  "&q=";

export const VIDEO_BY_ID_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY +
  "&id=";

export const getDateFormat = (time) => {
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

export const getCountFormat = (count) => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + "M";
  } else if (count >= 1000) {
    return Math.round(count / 1000) + "k";
  } else {
    return count;
  }
};

export const formatDuration = (duration) => {
  const durationObj = moment.duration(duration);
  const hours = Math.floor(durationObj.asHours());
  const minutes = durationObj.minutes();
  const seconds = durationObj.seconds();

  let formattedTime = "";

  if (hours > 0) {
    formattedTime += hours.toString().padStart(2, "0") + ":";
  }

  formattedTime +=
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");

  return formattedTime;
};
