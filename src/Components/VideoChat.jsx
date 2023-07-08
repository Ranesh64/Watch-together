const VideoChat = () => {
  return (
    <div className="h-[488px] divide-y divide-neutral-700">
      <div className="flex mx-4 mt-4 pb-4 h-[408px] items-center ">
        <div className="h-[190px] w-full rounded-lg bg-zinc-800 flex justify-center items-center relative">
          <div className="w-[100px] h-[100px] rounded-full bg-violet-700 flex justify-center items-center">
            <p className="text-5xl">R</p>
          </div>
          <div className="absolute bottom-2 left-3">
            <div className="text-xs px-2 py-1 bg-black bg-opacity-50 rounded">
              You
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="mt-4 flex justify-center items-center gap-x-4">
          <div className="p-2 bg-red-500 rounded-full">
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
          </div>
          <div className="p-2 bg-red-500 rounded-full">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoChat;
