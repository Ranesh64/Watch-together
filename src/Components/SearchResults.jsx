/* eslint-disable react/prop-types */
import {
  formatDuration,
  getCountFormat,
  getDateFormat,
} from "../utils/constants";

import { useEffect, useState } from "react";
import { SEARCH_BY_QUERY_URL, VIDEO_BY_ID_URL } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import { useProfile } from "../utils/useProfile";

const SearchCard = ({ result }) => {
  const [videoStats, setVideoStats] = useState(null);
  const { id, snippet } = result;
  const {
    channelId,
    channelTitle,
    description,
    publishedAt,
    title,
    thumbnails,
  } = snippet;
  const profile = useProfile(channelId);

  const fetchVideoStats = async () => {
    const data = await fetch(VIDEO_BY_ID_URL + id?.videoId);
    const json = await data.json();
    console.log(json?.items);
    setVideoStats(json?.items[0]);
  };

  useEffect(() => {
    fetchVideoStats();
  }, []);

  return (
    <div className="flex gap-x-4">
      <div className="w-[360px] h-52 relative">
        <img
          src={thumbnails?.medium?.url}
          alt="thumbnail"
          className="w-full h-full rounded-lg"
        />
        <div className="absolute right-1 bottom-1 text-xs text-[#f1f1f1] bg-body-black px-1 py-0.5 rounded-[0.25rem] font-semibold">
          {formatDuration(videoStats?.contentDetails?.duration)}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <p className="mb-1 two-line-ellipsis text-lg">{title}</p>
        <div>
          <span className="text-gray-400 text-xs after:content-['•'] after:ml-1 after:mr-1">
            {getCountFormat(videoStats?.statistics?.viewCount)} views
          </span>
          <span className="text-gray-400 text-xs">
            {getDateFormat(publishedAt)} ago
          </span>
        </div>
        <div className="flex">
          <img src={profile} alt="logo" className="rounded-full w-6 h-6" />
          <p className="text-gray-400 text-xs ">{channelTitle}</p>
        </div>
        <div className="text-xs text-neutral-400">{description}</div>
      </div>
    </div>
  );
};

const SearchResults = () => {
  const [results, setResults] = useState([]);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");

  const fetchSearchResults = async () => {
    const data = await fetch(SEARCH_BY_QUERY_URL + searchQuery);
    const json = await data.json();
    console.log(json.items);
    setResults(json.items);
  };

  useEffect(() => {
    fetchSearchResults();
  }, []);
  console.log("rendered...");
  return results.length == 0 ? null : (
    <div className="flex flex-col gap-y-4 mt-10">
      {results.map((result) => (
        <SearchCard key={result.etag} result={result} />
      ))}
    </div>
  );
};

export default SearchResults;
