import { useEffect, useState } from "react";

export const useProfile = (channelId) => {
  const [profileUrl, setProfileUrl] = useState("");

  useEffect(() => {
    getProfile(channelId);
  });

  const getProfile = async (channelId) => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        channelId +
        "&key=AIzaSyCgVgxyZBE9X-4vlh7uP220wvdmO67ROxU"
    );
    const json = await data.json();
    // console.log(json?.items[0]?.snippet?.thumbnails?.default?.url);
    setProfileUrl(json?.items[0]?.snippet?.thumbnails?.default?.url);
  };

  return profileUrl;
};
