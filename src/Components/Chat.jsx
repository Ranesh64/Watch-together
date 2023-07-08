const Chat = () => {
  return (
    <div className="h-[488px] divide-y divide-neutral-700">
      <div className="mx-4 mt-4 pb-4 h-[408px]">
        <div className="flex gap-x-3 mb-4">
          <div className="w-6 h-6 bg-violet-700 rounded-2xl shrink-0" />
          <div className="flex flex-col">
            <div className="text-stone-300 text-[13px] font-medium">
              Ranesh suthar
            </div>
            <div className="w-full text-white text-[13px] font-normal">
              This is a trial message to check how the text msg is going to look
              a like.
            </div>
          </div>
        </div>
        <div className="flex gap-x-3 mb-4">
          <div className="w-6 h-6 bg-violet-700 rounded-2xl shrink-0" />
          <div className="flex flex-col">
            <div className="text-stone-300 text-[13px] font-medium">
              Ranesh suthar
            </div>
            <div className="w-full text-white text-[13px] font-normal">
              This is a trial message to check how the text msg is going to look
              a like.
            </div>
          </div>
        </div>
        <div className="flex gap-x-3 mb-4">
          <div className="w-6 h-6 bg-violet-700 rounded-2xl shrink-0" />
          <div className="flex flex-col">
            <div className="text-stone-300 text-[13px] font-medium">
              Ranesh suthar
            </div>
            <div className="w-full text-white text-[13px] font-normal">
              This is a trial message to check how the text msg is going to look
              a like.
            </div>
          </div>
        </div>
        <div className="flex gap-x-3 mb-4">
          <div className="w-6 h-6 bg-violet-700 rounded-2xl shrink-0" />
          <div className="flex flex-col">
            <div className="text-stone-300 text-[13px] font-medium">
              Ranesh suthar
            </div>
            <div className="w-full text-white text-[13px] font-normal">
              This is a trial message to check how the text msg is going to look
              a like.
            </div>
          </div>
        </div>
        <div className="flex gap-x-3 mb-4">
          <div className="w-6 h-6 bg-violet-700 rounded-2xl shrink-0" />
          <div className="flex flex-col">
            <div className="text-stone-300 text-[13px] font-medium">
              Ranesh suthar
            </div>
            <div className="w-full text-white text-[13px] font-normal">
              This is a trial message to check how the text msg is going to look
              a like.
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mx-4 mt-4 relative h-12">
          <textarea
            className="w-full h-12 text-sm overflow-y-hidden box-border rounded-full border border-neutral-700 bg-inherit pl-4 py-3 pr-12 resize-none focus:outline-none placeholder:text-neutral-500"
            placeholder="Send a message"
          ></textarea>
          <div className="absolute right-0 inset-y-0 flex items-center pr-3">
            <button>
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                fill="white"
              >
                <path
                  d="M5,12L3,3l19,9L3,21L5,12z M5.82,12.93L17,12L5.82,11.07l-1.4-6.29L19.66,12 L4.42,19.22L5.82,12.93z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;