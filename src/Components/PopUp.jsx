import { useDispatch } from "react-redux";
import BgImage from "../assets/bgimage.png";
import { showDialog, showChat } from "../utils/appSlice";

const PopUp = () => {
  const dispatch = useDispatch();

  const closeDialog = () => {
    dispatch(showDialog());
  };

  const enableChat = () => {
    dispatch(showChat());
    dispatch(showDialog());
  };
  return (
    <div className="fixed bg-black bg-opacity-50 top-0 bottom-0 left-0 right-0 z-50">
      <div className="flex items-center justify-center h-screen">
        <div className="absolute h-[460px] w-[480px] bg-neutral-900 rounded-lg">
          <img
            className="w-full h-[140px] rounded-tl-lg rounded-tr-lg bg-violet-700"
            src={BgImage}
          />
          <div className="text-center text-lg font-semibold tracking-wider mt-6 mb-1">
            Experience YouTube with others in real time
          </div>
          <div className="text-center text-zinc-300 text-[16px] mb-14">
            Chat and Watch videos together
          </div>
          <div className="mb-1 text-base ml-10 text-zinc-50">Chat as</div>
          <div className="text-center mb-8">
            <input
              type="text"
              className="w-[400px] h-14 rounded-lg pl-4 bg-neutral-800 text-neutral-200 placeholder:text-neutral-500 focus:outline-none"
              placeholder="Enter your name"
              value={"Ranesh suthar"}
            />
          </div>
          <hr className="border-neutral-700" />
          <div className="flex w-full justify-end px-6 py-4">
            <button className="px-4 py-2 text-sm" onClick={closeDialog}>
              Cancel
            </button>
            <button
              className="px-4 py-2 rounded-full font-semibold text-sm bg-white text-black"
              onClick={enableChat}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
