import { useSelector } from "react-redux";
import avatar from "../assets/avatar.png";

const Sidebar = () => {
  const menu = useSelector((store) => store.app.isMenuOpen);
  console.log(menu);

  return menu ? (
    <aside className="basis-60 shrink-0 mt-4">
      <div className="h-screen fixed no-scrollbar overflow-y-scroll w-52 divide-y divide-neutral-700">
        <ul className="mb-4">
          <li className="flex items-center bg-neutral-800 hover:bg-neutral-700 rounded-lg px-3">
            <div className="pr-6 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
              >
                <path d="M0 7V18H6V12H10V18H16V7L8 0L0 7Z" fill="white" />
              </svg>
            </div>
            <div className=" text-sm flex-grow">
              <p>Home</p>
            </div>
          </li>
          <li className="flex items-center px-3 hover:bg-neutral-800 hover:rounded-lg">
            <div className="pr-6 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
              >
                <path
                  d="M7 12.65V7.35L12 10L7 12.65ZM14.77 8.32C14 8 13.57 7.82 13.57 7.82L15 7.06C16.84 6.1 17.53 3.83 16.56 2C15.59 0.17 13.32 -0.529999 11.49 0.440001L3 4.94C1.71 5.62 0.929999 6.98 0.999999 8.43C1.07 9.85 1.93 11.1 3.22 11.68C3.25 11.69 4.42 12.18 4.42 12.18L3 12.93C1.17 13.9 0.469999 16.17 1.44 18C2.41 19.83 4.68 20.53 6.51 19.56L15.01 15.06C16.3 14.38 17.07 13.02 17 11.57C16.93 10.15 16.06 8.89 14.77 8.32ZM14.54 14.18L6.04 18.68C4.7 19.39 3.03 18.88 2.32 17.54C1.61 16.2 2.12 14.53 3.46 13.82L5.5 12.74V11.53L4.81 11.25L3.7 10.79C2.71 10.38 2.05 9.44 2 8.38C1.95 7.32 2.52 6.32 3.46 5.82L11.96 1.32C13.3 0.61 14.97 1.12 15.68 2.46C16.39 3.8 15.88 5.47 14.54 6.18L12.5 7.26V8.47L14.3 9.21C15.29 9.62 15.95 10.56 16 11.62C16.05 12.68 15.48 13.68 14.54 14.18Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-sm flex-grow">
              <p>Shorts</p>
            </div>
          </li>
          <li className="flex items-center px-3 hover:bg-neutral-800 hover:rounded-lg">
            <div className="pr-6 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
              >
                <path
                  d="M8 15V9L13 12L8 15ZM15 0H5V1H15V0ZM18 3H2V4H18V3ZM20 6H0V18H20V6ZM1 7H19V17H1V7Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-sm flex-grow">
              <p>Subscriptions</p>
            </div>
          </li>
        </ul>
        <ul className="py-4">
          <li className="flex items-center px-3 hover:bg-neutral-800 hover:rounded-lg">
            <div className="pr-6 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M8 4L14 7.5L8 11V4ZM15 17H1V3H0V18H15V17ZM18 15H3V0H18V15ZM4 14H17V1H4V14Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-sm flex-grow">
              <p>Library</p>
            </div>
          </li>
          <li className="flex items-center px-3 hover:bg-neutral-800 hover:rounded-lg">
            <div className="pr-6 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M13.97 14.95L9.00001 11.87V5H11V10.76L15.03 13.25L13.97 14.95ZM21 10C21 15.51 16.51 20 11 20C5.49001 20 1.00001 15.51 1.00001 10H2.00001C2.00001 14.96 6.04001 19 11 19C15.96 19 20 14.96 20 10C20 5.04 15.96 1 11 1C7.81001 1 4.92001 2.64 3.28001 5.38C3.17001 5.56 3.06001 5.75 2.97001 5.94C2.96001 5.96 2.95001 5.98 2.94001 6H7.00001V7H0.960007V1H1.96001V5.74C2.00001 5.65 2.03001 5.57 2.07001 5.49C2.18001 5.27 2.30001 5.07 2.42001 4.86C4.22001 1.86 7.51001 0 11 0C16.51 0 21 4.49 21 10Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-sm flex-grow">
              <p>History</p>
            </div>
          </li>
          <li className="flex items-center px-3 hover:bg-neutral-800 hover:rounded-lg">
            <div className="pr-6 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M7 5L13 9L7 13V5ZM18 0V18H0V0H18ZM17 1H1V17H17V1Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-sm flex-grow">
              <p>Your videos</p>
            </div>
          </li>
          <li className="flex items-center px-3 hover:bg-neutral-800 hover:rounded-lg">
            <div className="pr-6 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M12.97 14.95L8 11.87V5H10V10.76L14.03 13.25L12.97 14.95ZM10 1C5.04 1 1 5.04 1 10C1 14.96 5.04 19 10 19C14.96 19 19 14.96 19 10C19 5.04 14.96 1 10 1ZM10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-sm flex-grow">
              <p>Watch later</p>
            </div>
          </li>
          <li className="flex items-center px-3 hover:bg-neutral-800 hover:rounded-lg">
            <div className="pr-6 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
              >
                <path
                  d="M15.77 7H11.54L13.06 2.06C13.38 1.03 12.54 0 11.38 0C10.8 0 10.24 0.24 9.86 0.65L4 7H0V17H4H5H14.43C15.49 17 16.41 16.33 16.62 15.39L17.96 9.39C18.23 8.15 17.18 7 15.77 7ZM4 16H1V8H4V16ZM16.98 9.17L15.64 15.17C15.54 15.65 15.03 16 14.43 16H5V7.39L10.6 1.33C10.79 1.12 11.08 1 11.38 1C11.64 1 11.88 1.11 12.01 1.3C12.08 1.4 12.16 1.56 12.1 1.77L10.58 6.71L10.18 8H11.53H15.76C16.17 8 16.56 8.17 16.79 8.46C16.92 8.61 17.05 8.86 16.98 9.17Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-sm flex-grow">
              <p>Liked videos</p>
            </div>
          </li>
        </ul>
        <ul className="py-4">
          <h4 className="font-medium ml-4 mb-2">Subscriptions</h4>
          <li className="flex items-center px-3 hover:bg-neutral-800 hover:rounded-lg">
            <div className="pr-6 py-2 ">
              <img
                src="https://yt3.ggpht.com/7q9t5rjeujEZYqY1xMLn0mvT4Zc6MaZBYgtseDL2_Zh42AOhMze8ep7BUKdR5FnxytMy3csj=s88-c-k-c0x00ffffff-no-rj"
                alt="avatar"
                className="h-8 w-8 rounded-full"
              />
            </div>
            <div className="text-sm flex-grow">
              <p>Simplilearn</p>
            </div>
          </li>
          <li className="flex items-center px-3 hover:bg-neutral-800 hover:rounded-lg">
            <div className="pr-6 py-2 ">
              <img
                src="https://yt3.ggpht.com/rvcB-tXoQ3SE-yq5HvaDU7d7i1X--Vgs_j8gwt_XGHJLnFourofmeMSMpJ8eww_w2U3Gn0E7Uw=s88-c-k-c0x00ffffff-no-rj"
                alt="avatar"
                className="h-8 w-8 rounded-full"
              />
            </div>
            <div className="text-sm flex-grow">
              <p>CodeHelp</p>
            </div>
          </li>
          <li className="flex items-center px-3 hover:bg-neutral-800 hover:rounded-lg">
            <div className="pr-6 py-2 ">
              <img
                src="https://yt3.ggpht.com/ZtTC1B4j2WXtF_WxiFu58Al15AG3Ni73NGcHgSp8WnyLwG7joy5WUG6bnSKRII4_P7PjFo6BG9I=s88-c-k-c0x00ffffff-no-rj"
                alt="avatar"
                className="h-8 w-8 rounded-full"
              />
            </div>
            <div className="flex-grow text-sm">
              <p>Coding Shuttle</p>
            </div>
          </li>
          <li className="flex items-center px-3 hover:bg-neutral-800 hover:rounded-lg">
            <div className="pr-6 py-2">
              <img src={avatar} alt="avatar" className="h-8 w-8" />
            </div>
            <div className="flex-grow text-sm">
              <p>Pehchan Music</p>
            </div>
          </li>
          <li className="flex items-center px-3 hover:bg-neutral-800 hover:rounded-lg">
            <div className="pr-6 py-2 ">
              <img
                src="https://yt3.ggpht.com/v_PwNTRdcmpaEU6zh9wytm0ERtq2BOAmBQvr1QyZstphlpcPUqjbX3wqIvSRR9bWIgSjmRUJcwE=s88-c-k-c0x00ffffff-no-rj"
                alt="avatar"
                className="h-8 w-8 rounded-full"
              />
            </div>
            <div className="flex-grow text-sm">
              <p>T-Series</p>
            </div>
          </li>
          <li className="flex items-center px-3 hover:bg-neutral-800 hover:rounded-lg">
            <div className="pr-6 py-2">
              <img
                src="https://yt3.ggpht.com/v_PwNTRdcmpaEU6zh9wytm0ERtq2BOAmBQvr1QyZstphlpcPUqjbX3wqIvSRR9bWIgSjmRUJcwE=s88-c-k-c0x00ffffff-no-rj"
                alt="avatar"
                className="h-8 w-8 rounded-full"
              />
            </div>
            <div className="flex-grow text-sm">
              <p>T-Series</p>
            </div>
          </li>
          <li className="flex items-center px-3 hover:bg-neutral-800 hover:rounded-lg">
            <div className="pr-6 py-2">
              <img
                src="https://yt3.ggpht.com/v_PwNTRdcmpaEU6zh9wytm0ERtq2BOAmBQvr1QyZstphlpcPUqjbX3wqIvSRR9bWIgSjmRUJcwE=s88-c-k-c0x00ffffff-no-rj"
                alt="avatar"
                className="h-8 w-8 rounded-full"
              />
            </div>
            <div className="flex-grow text-sm">
              <p>T-Series</p>
            </div>
          </li>
          <li className="flex items-center px-3 hover:bg-neutral-800 hover:rounded-lg">
            <div className="pr-6 py-2">
              <img
                src="https://yt3.ggpht.com/v_PwNTRdcmpaEU6zh9wytm0ERtq2BOAmBQvr1QyZstphlpcPUqjbX3wqIvSRR9bWIgSjmRUJcwE=s88-c-k-c0x00ffffff-no-rj"
                alt="avatar"
                className="h-8 w-8 rounded-full"
              />
            </div>
            <div className="flex-grow text-sm">
              <p>T-Series</p>
            </div>
          </li>
          <li className="flex items-center px-3 hover:bg-neutral-800 hover:rounded-lg">
            <div className="pr-6 py-2">
              <img
                src="https://yt3.ggpht.com/v_PwNTRdcmpaEU6zh9wytm0ERtq2BOAmBQvr1QyZstphlpcPUqjbX3wqIvSRR9bWIgSjmRUJcwE=s88-c-k-c0x00ffffff-no-rj"
                alt="avatar"
                className="h-8 w-8 rounded-full"
              />
            </div>
            <div className="flex-grow text-sm">
              <p>T-Series</p>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  ) : (
    <aside className="basis-16 shrink-0 mt-4">
      <div className="h-screen fixed left-0 w-16">
        <ul className="flex flex-col px-1">
          <li className="flex flex-col items-center w-16 hover:bg-neutral-800 pt-4 pb-3.5 rounded-lg">
            <div className="pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
              >
                <path d="M0 7V18H6V12H10V18H16V7L8 0L0 7Z" fill="white" />
              </svg>
            </div>
            <div className=" text-[10px] flex-grow">
              <p>Home</p>
            </div>
          </li>
          <li className="flex flex-col items-center w-16 pt-4 pb-3.5 hover:bg-neutral-800 rounded-lg">
            <div className="pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
              >
                <path
                  d="M7 12.65V7.35L12 10L7 12.65ZM14.77 8.32C14 8 13.57 7.82 13.57 7.82L15 7.06C16.84 6.1 17.53 3.83 16.56 2C15.59 0.17 13.32 -0.529999 11.49 0.440001L3 4.94C1.71 5.62 0.929999 6.98 0.999999 8.43C1.07 9.85 1.93 11.1 3.22 11.68C3.25 11.69 4.42 12.18 4.42 12.18L3 12.93C1.17 13.9 0.469999 16.17 1.44 18C2.41 19.83 4.68 20.53 6.51 19.56L15.01 15.06C16.3 14.38 17.07 13.02 17 11.57C16.93 10.15 16.06 8.89 14.77 8.32ZM14.54 14.18L6.04 18.68C4.7 19.39 3.03 18.88 2.32 17.54C1.61 16.2 2.12 14.53 3.46 13.82L5.5 12.74V11.53L4.81 11.25L3.7 10.79C2.71 10.38 2.05 9.44 2 8.38C1.95 7.32 2.52 6.32 3.46 5.82L11.96 1.32C13.3 0.61 14.97 1.12 15.68 2.46C16.39 3.8 15.88 5.47 14.54 6.18L12.5 7.26V8.47L14.3 9.21C15.29 9.62 15.95 10.56 16 11.62C16.05 12.68 15.48 13.68 14.54 14.18Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-[10px] flex-grow">
              <p>Shorts</p>
            </div>
          </li>
          <li className="flex flex-col items-center w-16 pt-4 pb-3.5 hover:bg-neutral-800 rounded-lg">
            <div className="pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
              >
                <path
                  d="M8 15V9L13 12L8 15ZM15 0H5V1H15V0ZM18 3H2V4H18V3ZM20 6H0V18H20V6ZM1 7H19V17H1V7Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-[10px] flex-grow">
              <p>Subscriptions</p>
            </div>
          </li>
          <li className="flex flex-col items-center w-16 pt-4 pb-3.5 hover:bg-neutral-800 rounded-lg">
            <div className="pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M8 4L14 7.5L8 11V4ZM15 17H1V3H0V18H15V17ZM18 15H3V0H18V15ZM4 14H17V1H4V14Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-[10px] flex-grow">
              <p>Library</p>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
