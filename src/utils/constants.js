export const API_KEY = "AIzaSyCgVgxyZBE9X-4vlh7uP220wvdmO67ROxU";

export const YOUTUBE_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=" +
  API_KEY;

export const CHANNEL_DATA_URL =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const SEARCH_SUGGESTIONS_URL =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const COMMENTS_URL =
  " https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=";
