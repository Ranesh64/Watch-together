import { useEffect, useState } from "react";
import { CHANNEL_DATA_URL } from "./constants";

export const useProfile = (channelId) => {
  const [profileUrl, setProfileUrl] = useState("");

  useEffect(() => {
    getProfile(channelId);
  });

  const getProfile = async (channelId) => {
    const data = await fetch(CHANNEL_DATA_URL + channelId);
    const json = await data.json();
    // console.log(json?.items[0]?.snippet?.thumbnails?.default?.url);
    setProfileUrl(json?.items[0]?.snippet?.thumbnails?.default?.url);
  };

  return profileUrl;
};
