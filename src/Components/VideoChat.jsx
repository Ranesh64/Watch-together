/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from "react";

let peer = null;

const VideoChat = ({ socket }) => {
  const [remoteId, setRemoteId] = useState(null);
  const [myStream, setMyStream] = useState(null);
  const [camera, setCamera] = useState(true);
  const [mic, setMic] = useState(true);
  const [remoteStream, setRemoteStream] = useState(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

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

  const toggleVideo = () => {
    setCamera(!camera);
    const enabled = localVideoRef.current.srcObject.getVideoTracks()[0].enabled;
    localVideoRef.current.srcObject.getVideoTracks()[0].enabled = !enabled;
  };

  const toggleAudio = () => {
    setMic(!mic);
    const enabled = localVideoRef.current.srcObject.getAudioTracks()[0].enabled;
    localVideoRef.current.srcObject.getAudioTracks()[0].enabled = !enabled;
  };
  const getUserMedia = useCallback(async () => {
    const userMedia = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    setMyStream(userMedia);
  }, []);

  useEffect(() => {
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
    initiateCall(remoteId);
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
    <div className="h-[488px] divide-y divide-neutral-700">
      <div className="flex mx-4 mt-4 pb-4 h-[408px] items-center justify-center flex-col gap-y-3">
        <div className="h-[190px] w-full rounded-lg bg-zinc-800 flex justify-center items-center relative">
          <video className="w-full h-full" autoPlay ref={localVideoRef}></video>
          {/* (
            <div className="w-[100px] h-[100px] rounded-full bg-violet-700 flex justify-center items-center">
              <p className="text-5xl">R</p>
            </div>
          ) */}
          <div className="absolute bottom-2 left-3">
            <div className="text-xs px-2 py-1 bg-black bg-opacity-50 rounded">
              You
            </div>
          </div>
        </div>
        {remoteStream && (
          <div className="h-[190px] w-full rounded-lg bg-zinc-800 flex justify-center items-center relative">
            <video
              className="w-full h-full"
              autoPlay
              ref={remoteVideoRef}
            ></video>
            {/* (
            <div className="w-[100px] h-[100px] rounded-full bg-violet-700 flex justify-center items-center">
              <p className="text-5xl">R</p>
            </div>
          ) */}
            <div className="absolute bottom-2 left-3">
              <div className="text-xs px-2 py-1 bg-black bg-opacity-50 rounded">
                You
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="">
        <div className="mt-4 flex justify-center items-center gap-x-4">
          {mic ? (
            <button
              className="p-2 bg-neutral-800 rounded-full"
              onClick={toggleAudio}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g id="mic">
                  <path
                    id="Vector"
                    d="M11.999 14.0469C13.659 14.0469 14.999 12.7069 14.999 11.0469V5.04688C14.999 3.38688 13.659 2.04688 11.999 2.04688C10.339 2.04688 8.99901 3.38688 8.99901 5.04688V11.0469C8.99901 12.7069 10.339 14.0469 11.999 14.0469ZM17.909 11.0469C17.419 11.0469 17.009 11.4069 16.929 11.8969C16.519 14.2469 14.469 16.0469 11.999 16.0469C9.52901 16.0469 7.47901 14.2469 7.06901 11.8969C6.98901 11.4069 6.57901 11.0469 6.08901 11.0469C5.47901 11.0469 4.99901 11.5869 5.08901 12.1869C5.57901 15.1869 7.97901 17.5369 10.999 17.9669V20.0469C10.999 20.5969 11.449 21.0469 11.999 21.0469C12.549 21.0469 12.999 20.5969 12.999 20.0469V17.9669C16.019 17.5369 18.419 15.1869 18.909 12.1869C19.009 11.5869 18.519 11.0469 17.909 11.0469Z"
                    fill="white"
                  />
                </g>
              </svg>
            </button>
          ) : (
            <button
              className="p-2 bg-red-500 rounded-full"
              onClick={toggleAudio}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g id="mic-off">
                  <path
                    id="Vector"
                    d="M14.9966 10.6V5C14.9966 3.34 13.6566 2 11.9966 2C10.4566 2 9.20656 3.16 9.03656 4.65L14.9966 10.6ZM18.0766 11C17.6666 11 17.3066 11.3 17.2466 11.71C17.1966 12.03 17.1266 12.35 17.0266 12.64L18.2966 13.91C18.5966 13.31 18.8166 12.66 18.9266 11.97C18.9966 11.46 18.5966 11 18.0766 11ZM3.70656 3.56C3.31656 3.95 3.31656 4.58 3.70656 4.97L8.99656 10.27V10.7C8.99656 11.89 9.59656 13.02 10.6266 13.61C11.3766 14.04 12.0366 14.05 12.6466 13.92L14.3066 15.58C13.5966 15.91 12.8066 16.1 11.9966 16.1C9.45656 16.1 7.11656 14.33 6.74656 11.71C6.68656 11.3 6.32656 11 5.91656 11C5.39656 11 4.99656 11.46 5.06656 11.97C5.52656 14.93 8.02656 17.27 10.9966 17.72V20C10.9966 20.55 11.4466 21 11.9966 21C12.5466 21 12.9966 20.55 12.9966 20V17.72C13.9066 17.59 14.7666 17.27 15.5466 16.82L19.0366 20.31C19.4266 20.7 20.0566 20.7 20.4466 20.31C20.8366 19.92 20.8366 19.29 20.4466 18.9L5.11656 3.56C4.72656 3.17 4.09656 3.17 3.70656 3.56Z"
                    fill="white"
                  />
                </g>
              </svg>
            </button>
          )}
          {camera ? (
            <button
              className="p-2 bg-neutral-800 rounded-full"
              onClick={toggleVideo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g id="videocam">
                  <path
                    id="Vector"
                    d="M15 8.04688V16.0469H5V8.04688H15ZM16 6.04688H4C3.45 6.04688 3 6.49687 3 7.04688V17.0469C3 17.5969 3.45 18.0469 4 18.0469H16C16.55 18.0469 17 17.5969 17 17.0469V13.5469L21 17.5469V6.54688L17 10.5469V7.04688C17 6.49687 16.55 6.04688 16 6.04688Z"
                    fill="white"
                  />
                </g>
              </svg>
            </button>
          ) : (
            <button
              className="p-2 bg-red-500 rounded-full"
              onClick={toggleVideo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g id="videocam-off">
                  <path
                    id="Vector"
                    d="M9.56 7.99937L7.56 5.99937L3.41 1.85938L2 3.26937L4.73 5.99937H4C3.45 5.99937 3 6.44937 3 6.99937V16.9994C3 17.5494 3.45 17.9994 4 17.9994H16C16.21 17.9994 16.39 17.9194 16.55 17.8194L19.73 20.9994L21.14 19.5894L12.28 10.7294L9.56 7.99937ZM5 15.9994V7.99937H6.73L14.73 15.9994H5ZM15 7.99937V10.6094L21 16.6094V6.49937L17 10.4994V6.99937C17 6.44937 16.55 5.99937 16 5.99937H10.39L12.39 7.99937H15Z"
                    fill="white"
                  />
                </g>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoChat;
