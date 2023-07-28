/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from "react";
// import { io } from "socket.io-client";
import Chat from "./Chat";
import { useDispatch } from "react-redux";
import { showChat } from "../utils/appSlice";
import VideoChat from "./VideoChat";

let peer = null;

// const Player = () => {
//   const playerRef = useRef(null);

//   const handlePlayerStateChange = useCallback((playerState) => {
//     if (playerRef.current) {
//       if (playerState === window.YT.PlayerState.PLAYING) {
//         playerRef.current.playVideo();
//       } else if (playerState === window.YT.PlayerState.PAUSED) {
//         playerRef.current.pauseVideo();
//       }
//     }
//   }, []);

//   useEffect(() => {
//     const tag = document.createElement("script");
//     tag.src = "https://www.youtube.com/iframe_api";
//     const firstScriptTag = document.getElementsByTagName("script")[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     window.onYouTubeIframeAPIReady = () => {
//       if (playerRef.current) {
//         playerRef.current = new window.YT.Player(playerRef.current, {
//           events: {
//             onReady: onPlayerReady,
//             onStateChange: onPlayerStateChange,
//           },
//         });
//       }
//     };
//     socket.on("playerStateChange", handlePlayerStateChange);
//   }, []);

//   const onPlayerReady = () => {
//     if (playerRef.current) {
//       console.log("Player is ready");
//       // playerRef.current.playVideo();
//     }
//   };

//   const onPlayerStateChange = (event) => {
//     console.log(`Current time : ${playerRef.current.getCurrentTime()}`);
//     const playerState = event.data;
//     socket.emit("playerStateChange", playerState);
//   };

//   return (
//     <div>
//       <iframe
//         ref={playerRef}
//         width="1024"
//         height="576"
//         src="https://www.youtube.com/embed/RgD8sDUKn-g?enablejsapi=1&rel=0"
//         title="ROUND 2 HELL ROAST ON THE THUGESH SHOW | S01E06 | @Round2hell"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         allowFullScreen
//         className="rounded-2xl"
//       ></iframe>
//       <div>
//         <h4 className="text-xl mt-2.5">
//           Why World War 2 Happened? | The Real Reason | Dhruv Rathee
//         </h4>
//       </div>
//     </div>
//   );
// };

const WatchTogether = ({ socket }) => { //What this function is d
  // const socket = io("http://localhost:8000");
  const [remoteId, setRemoteId] = useState(null);
  const [myStream, setMyStream] = useState(null);
  const [activeTab, setActiveTab] = useState("");
  const [remoteStream, setRemoteStream] = useState(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  const dispatch = useDispatch();

  const endChat = () => {
    dispatch(showChat());
    socket.disconnect();
  };

  const handleUserJoined = useCallback((id) => {
    setRemoteId(id);
  }, []);

  // eslint-disable-next-line no-unused-vars
  const initiateCall = useCallback(
    async (remoteId) => {
      for (const track of myStream.getTracks()) {
        peer.addTrack(track, myStream);
      }

      const localOffer = await peer.createOffer();
      console.log("Local Offer created", localOffer);
      await peer.setLocalDescription(localOffer);
      console.log("Local description set for current peer");
      socket.emit("outgoing:call", { from: localOffer, to: remoteId });
    },
    [myStream]
  );

  const handleIceCandidate = useCallback(({ candidate }) => {
    const iceCandidate = new RTCIceCandidate(candidate);
    peer.addIceCandidate(iceCandidate);
    console.log("Ice candidate added");
  }, []);

  const handleIncomingCall = useCallback(async ({ from, offer }) => {
    console.log("Incoming call");
    await peer.setRemoteDescription(offer);
    console.log("Remote descriptin set");

    const incomingStream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });
    for (const track of incomingStream.getTracks()) {
      peer.addTrack(track, incomingStream);
    }
    const answerOffer = await peer.createAnswer();
    console.log("Answer offer created");
    await peer.setLocalDescription(answerOffer);
    console.log("Local description set");
    socket.emit("call:accepted", { answer: answerOffer, to: from });
  }, []);

  const handleIncomingAns = useCallback(async ({ offer }) => {
    console.log("handleIncomingAns called");
    await peer.setRemoteDescription(offer);
    console.log("Remote descriptin set");
  }, []);

  const getUserMedia = useCallback(async () => {
    const userMedia = await navigator.mediaDevices.getUserMedia({
      video: { width: 360, height: 240 },
    });
    setMyStream(userMedia);
  }, []);

  useEffect(() => {
    setActiveTab("chat");
    peer = new RTCPeerConnection({
      iceServers: [
        {
          urls: "stun:stun.stunprotocol.org",
        },
      ],
    });

    peer.addEventListener("track", (event) => {
      const stream = event.streams[0];
      setRemoteStream(stream);
    });

    peer.addEventListener("icecandidate", async (event) => {
      console.log("onicecandidate event called");
      if (event.candidate) {
        socket.emit("iceCandidate", {
          candidate: event.candidate,
          to: remoteId,
        });
      }
    });

    getUserMedia();
    socket.on("user-joined", handleUserJoined);
    socket.on("incoming:call", handleIncomingCall);
    socket.on("iceCandidate", handleIceCandidate);
    socket.on("incoming:answer", handleIncomingAns);

    return () => {
      console.log("events destroyed");
      socket.off("user-joined", handleUserJoined);
      socket.off("incoming:call", handleIncomingCall);
      socket.off("iceCandidate", handleIceCandidate);
      socket.off("incoming:answer", handleIncomingAns);
    };
  }, [
    handleUserJoined,
    handleIncomingCall,
    handleIceCandidate,
    handleIncomingAns,
    getUserMedia,
    remoteId,
  ]);

  useEffect(() => {
    if (localVideoRef.current) {
      console.log("ref called", localVideoRef);
      localVideoRef.current.srcObject = myStream;
    }
  }, [myStream]);

  useEffect(() => {
    if (remoteVideoRef.current) {
      console.log("ref called", remoteVideoRef);
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [remoteStream]);

  return (
    <div className="w-[416px] h-[608px] border border-[#474747] rounded-xl divide-y divide-neutral-700 box-border">
      <div className="flex justify-between items-center mx-4 my-2">
        <div>
          <button
            className={`px-3 py-2 ${activeTab == "chat" ? "active" : ""}`}
            onClick={() => setActiveTab("chat")}
          >
            Chat
          </button>
          <button
            className={`px-3 py-2 ${activeTab == "video" ? "active" : ""}`}
            onClick={() => setActiveTab("video")}
          >
            Video chat
          </button>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="m-1"
          >
            <g id="people-outline">
              <path
                id="Vector"
                d="M9 12C10.93 12 12.5 10.43 12.5 8.5C12.5 6.57 10.93 5 9 5C7.07 5 5.5 6.57 5.5 8.5C5.5 10.43 7.07 12 9 12ZM9 7C9.83 7 10.5 7.67 10.5 8.5C10.5 9.33 9.83 10 9 10C8.17 10 7.5 9.33 7.5 8.5C7.5 7.67 8.17 7 9 7ZM9 13.75C6.66 13.75 2 14.92 2 17.25V18C2 18.55 2.45 19 3 19H15C15.55 19 16 18.55 16 18V17.25C16 14.92 11.34 13.75 9 13.75ZM4.34 17C5.18 16.42 7.21 15.75 9 15.75C10.79 15.75 12.82 16.42 13.66 17H4.34ZM16.04 13.81C17.2 14.65 18 15.77 18 17.25V19H21C21.55 19 22 18.55 22 18V17.25C22 15.23 18.5 14.08 16.04 13.81ZM15 12C16.93 12 18.5 10.43 18.5 8.5C18.5 6.57 16.93 5 15 5C14.46 5 13.96 5.13 13.5 5.35C14.13 6.24 14.5 7.33 14.5 8.5C14.5 9.67 14.13 10.76 13.5 11.65C13.96 11.87 14.46 12 15 12Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
      </div>
      <div>{activeTab == "chat" ? <Chat /> : <VideoChat />}</div>
      <div className="flex justify-center py-2">
        <button className="py-1 text-sm" onClick={endChat}>
          Leave chat
        </button>
      </div>
    </div>
    /* <div className="mt-10 ml-6 flex">
        <div className="flex flex-col gap-y-3 w-[1024px]">
          <Player />
        </div>

        <div className="flex flex-col gap-y-6 shrink-0 flex-grow items-center justify-center">
          <div className="relative">
            <video
              className="w-[360px] h-60 bg-neutral-800 rounded-lg "
              autoPlay
              ref={localVideoRef}
            ></video>
            <div>
              <p className="px-3 py-1 rounded-lg bg-neutral-900 bg-opacity-50 absolute left-1 bottom-1">
                You
              </p>
            </div>
          </div>
          {remoteStream && (
            <video
              className="w-[360px] h-60 bg-neutral-800 rounded-lg"
              autoPlay
              ref={remoteVideoRef}
            ></video>
          )}
          {/* <button
            className="px-4 py-3 rounded-md"
            onClick={() => initiateCall(remoteId)}
          >
            Call-{remoteId}
          </button> */
    //         <div className="py-8 px-16 rounded-lg bg-zinc-800 grow-0 flex flex-col items-center">
    //           <div className="rounded-full bg-neutral-600 p-2.5 flex-shrink-0">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="20"
    //               height="20"
    //               viewBox="0 0 20 20"
    //               fill="none"
    //             >
    //               <path
    //                 id="Vector"
    //                 d="M18.5714 11.4286H11.4286V18.5714C11.4286 19.3571 10.7857 20 10 20C9.21429 20 8.57143 19.3571 8.57143 18.5714V11.4286H1.42857C0.642857 11.4286 0 10.7857 0 10C0 9.21429 0.642857 8.57143 1.42857 8.57143H8.57143V1.42857C8.57143 0.642857 9.21429 0 10 0C10.7857 0 11.4286 0.642857 11.4286 1.42857V8.57143H18.5714C19.3571 8.57143 20 9.21429 20 10C20 10.7857 19.3571 11.4286 18.5714 11.4286Z"
    //                 fill="#D9D9D9"
    //               />
    //             </svg>
    //           </div>
    //           <div className="mt-2">
    //             <span>Invite friends</span>
    //           </div>
    //         </div>
    //     <footer className="fixed left-0 right-0 bottom-0 p-4">
    //       <div className="flex gap-3 items-center justify-center">
    //         <button className="p-2.5 bg-zinc-800 rounded-full">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //           >
    //             <g id="mic">
    //               <path
    //                 id="Vector"
    //                 d="M11.999 14C13.659 14 14.999 12.66 14.999 11V5C14.999 3.34 13.659 2 11.999 2C10.339 2 8.99901 3.34 8.99901 5V11C8.99901 12.66 10.339 14 11.999 14ZM17.909 11C17.419 11 17.009 11.36 16.929 11.85C16.519 14.2 14.469 16 11.999 16C9.52901 16 7.47901 14.2 7.06901 11.85C6.98901 11.36 6.57901 11 6.08901 11C5.47901 11 4.99901 11.54 5.08901 12.14C5.57901 15.14 7.97901 17.49 10.999 17.92V20C10.999 20.55 11.449 21 11.999 21C12.549 21 12.999 20.55 12.999 20V17.92C16.019 17.49 18.419 15.14 18.909 12.14C19.009 11.54 18.519 11 17.909 11Z"
    //                 fill="white"
    //               />
    //             </g>
    //           </svg>
    //         </button>
    //         <button className="p-2.5 bg-zinc-800 rounded-full">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //           >
    //             <g id="videocam">
    //               <path
    //                 id="Vector"
    //                 d="M15 8V16H5V8H15ZM16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5V7C17 6.45 16.55 6 16 6Z"
    //                 fill="white"
    //               />
    //             </g>
    //           </svg>
    //         </button>
    //         <button className="px-4 py-2.5 bg-red-500 rounded-full">
    //           <p>Leave</p>
    //         </button>
    //       </div>
    //     </footer> */
  );
};

export default WatchTogether;
