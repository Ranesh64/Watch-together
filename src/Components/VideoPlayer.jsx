/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import { useProfile } from "../utils/useProfile";
import { getCountFormat, getDateFormat } from "../utils/constants";
import { useDispatch } from "react-redux";
import { showDialog } from "../utils/appSlice";
// import { io } from "socket.io-client";

const VideoDetails = ({ snippet, statistics }) => {
  const { title, channelId, channelTitle, publishedAt } = snippet;
  const { viewCount, likeCount } = statistics;
  const profile = useProfile(channelId);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const initiateWatchTogether = () => {
    dispatch(showDialog());
  };

  return (
    <div className="flex flex-col">
      <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
      <div className="flex justify-between">
        <div className="flex items-center gap-x-5">
          <div className="flex items-center gap-x-2">
            <img
              src={profile}
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p>{channelTitle}</p>
              <p className="text-[13px] text-neutral-300">210k subscribers</p>
            </div>
          </div>
          <button className="px-4 py-2 rounded-full font-semibold text-sm bg-white text-black">
            Subscribe
          </button>
        </div>
        <div className="flex items-center gap-x-2 ">
          <button
            className="bg-neutral-800 rounded-full p-1.5 box-border hover:bg-neutral-700"
            onClick={initiateWatchTogether}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g id="Group 10">
                <path
                  id="Vector"
                  d="M16.5 13C15.3 13 13.43 13.34 12 14C10.57 13.33 8.7 13 7.5 13C5.33 13 1 14.08 1 16.25V19H23V16.25C23 14.08 18.67 13 16.5 13ZM12.5 17.5H2.5V16.25C2.5 15.71 5.06 14.5 7.5 14.5C9.94 14.5 12.5 15.71 12.5 16.25V17.5ZM21.5 17.5H14V16.25C14 15.79 13.8 15.39 13.48 15.03C14.36 14.73 15.44 14.5 16.5 14.5C18.94 14.5 21.5 15.71 21.5 16.25V17.5ZM7.5 12C9.43 12 11 10.43 11 8.5C11 6.57 9.43 5 7.5 5C5.57 5 4 6.57 4 8.5C4 10.43 5.57 12 7.5 12ZM7.5 6.5C8.6 6.5 9.5 7.4 9.5 8.5C9.5 9.6 8.6 10.5 7.5 10.5C6.4 10.5 5.5 9.6 5.5 8.5C5.5 7.4 6.4 6.5 7.5 6.5ZM16.5 12C18.43 12 20 10.43 20 8.5C20 6.57 18.43 5 16.5 5C14.57 5 13 6.57 13 8.5C13 10.43 14.57 12 16.5 12ZM16.5 6.5C17.6 6.5 18.5 7.4 18.5 8.5C18.5 9.6 17.6 10.5 16.5 10.5C15.4 10.5 14.5 9.6 14.5 8.5C14.5 7.4 15.4 6.5 16.5 6.5Z"
                  fill="#D9D9D9"
                />
              </g>
            </svg>
          </button>
          <div className="flex divide-x divide-neutral-600 items-center bg-neutral-800 rounded-full box-border">
            <div className="px-4 py-1.5 hover:bg-neutral-700 hover:rounded-l-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                className="inline mr-2"
              >
                <path
                  d="M15.77 7H11.54L13.06 2.06C13.38 1.03 12.54 0 11.38 0C10.8 0 10.24 0.24 9.86 0.65L4 7H0V17H4H5H14.43C15.49 17 16.41 16.33 16.62 15.39L17.96 9.39C18.23 8.15 17.18 7 15.77 7ZM4 16H1V8H4V16ZM16.98 9.17L15.64 15.17C15.54 15.65 15.03 16 14.43 16H5V7.39L10.6 1.33C10.79 1.12 11.08 1 11.38 1C11.64 1 11.88 1.11 12.01 1.3C12.08 1.4 12.16 1.56 12.1 1.77L10.58 6.71L10.18 8H11.53H15.76C16.17 8 16.56 8.17 16.79 8.46C16.92 8.61 17.05 8.86 16.98 9.17Z"
                  fill="white"
                />
              </svg>
              <span className="text-sm">{getCountFormat(likeCount)}</span>
            </div>
            <div className="px-4 py-1.5 hover:bg-neutral-700 hover:rounded-r-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.23 13H9.46L7.94 17.94C7.62 18.97 8.46 20 9.62 20C10.2 20 10.76 19.76 11.14 19.35L17 13H21L21 3H17H16H6.57C5.51 3 4.59 3.67 4.38 4.61L3.04 10.61C2.77 11.85 3.82 13 5.23 13ZM17 4H20L20 12H17V4ZM4.02 10.83L5.36 4.83C5.46 4.35 5.97 4 6.57 4H16V12.61L10.4 18.67C10.21 18.88 9.92 19 9.62 19C9.36 19 9.12 18.89 8.99 18.7C8.92 18.6 8.84 18.44 8.9 18.23L10.42 13.29L10.82 12H9.47H5.24C4.83 12 4.44 11.83 4.21 11.54C4.08 11.39 3.95 11.14 4.02 10.83Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="bg-neutral-800 rounded-full px-4 py-1.5 box-border hover:bg-neutral-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              fill="none"
              className="inline mr-2"
            >
              <path
                d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"
                fill="white"
              ></path>
            </svg>
            <span className="text-sm">Share</span>
          </div>
          <div className="bg-neutral-800 rounded-full px-4 py-1.5 box-border hover:bg-neutral-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              fill="none"
              className="inline mr-1"
            >
              <path
                d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"
                fill="white"
              ></path>
            </svg>
            <span className="text-sm">Download</span>
          </div>
          <div className="bg-neutral-800 rounded-full p-1.5 box-border hover:bg-neutral-700">
            <svg height="24" viewBox="0 0 24 24" width="24" fill="none">
              <path
                d="M7.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4.5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-neutral-800 rounded-lg p-3 mt-4">
        <span className="text-sm font-semibold pr-2">
          {getCountFormat(viewCount) + " views"}
        </span>
        <span className="text-sm font-semibold">
          {getDateFormat(publishedAt) + " ago"}
        </span>
        <p className="text-sm">
          This is the description container for the above video.
        </p>
        <p className="pt-5 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          ratione ipsum, quod aperiam vel perspiciatis porro nam temporibus
          perferendis harum facere non soluta architecto.
        </p>
      </div>
    </div>
  );
};

const VideoPlayer = ({ socket }) => {
  const [searchParams] = useSearchParams();
  const { state } = useLocation();
  const { id, snippet, statistics } = state;
  console.log("VideoPlayer called...");
  const playerRef = useRef(null);
  // const chat = useSelector((store) => store.app.showChat);
  // if (chat) {
  //   socket = io("http://localhost:8000");
  // }

  //let socket = chat ? io("http://localhost:8000") : null;
  const handlePlayerStateChange = useCallback((playerState) => {
    if (playerRef.current) {
      if (playerState === window.YT.PlayerState.PLAYING) {
        playerRef.current.playVideo();
      } else if (playerState === window.YT.PlayerState.PAUSED) {
        playerRef.current.pauseVideo();
      }
    }
  }, []);

  useEffect(() => {
    if (socket) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        if (playerRef.current) {
          playerRef.current = new window.YT.Player(playerRef.current, {
            events: {
              onReady: onPlayerReady,
              onStateChange: onPlayerStateChange,
            },
          });
        }
      };
      socket.on("playerStateChange", handlePlayerStateChange);

      return () => {
        socket.off("playerStateChange", handlePlayerStateChange);
      };
    }
  }, [socket]);

  const onPlayerReady = () => {
    if (playerRef.current) {
      console.log("Player is ready");
      // playerRef.current.playVideo();
    }
  };

  const onPlayerStateChange = (event) => {
    console.log(`Current time : ${playerRef.current.getCurrentTime()}`);
    const playerState = event.data;
    if (socket) {
      socket.emit("playerStateChange", playerState);
    }
  };

  return (
    <div className="flex flex-col gap-y-3 w-[1024px]">
      <iframe
        width="1024"
        height="576"
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v") +
          "?enablejsapi=1"
        }
        title="David Wiese Scores Crucial 50 | Leicestershire v Yorkshire - Highlights | Vitality Blast 2023"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        ref={playerRef}
      ></iframe>
      <VideoDetails snippet={snippet} statistics={statistics} />
      <CommentSection id={id} />
    </div>
  );
};

export default VideoPlayer;
