/* eslint-disable react/prop-types */

const Comment = ({ data, avatarSize }) => {
  const {
    authorDisplayName,
    authorProfileImageUrl,
    publishedAt,
    textOriginal,
    likeCount,
  } = data;
  const getdays = (time) => {
    let startDate = new Date(time);
    let endDate = new Date();

    let timeDiff = endDate.getTime() - startDate.getTime(); //In Milliseconds

    let minutesDiff = timeDiff / (1000 * 60); //In Minutes

    if (minutesDiff >= 1440) {
      const days = Math.floor(minutesDiff / (60 * 24));
      if (days >= 365) {
        return Math.floor(days / 365) + " years";
      } else if (days >= 30) {
        return Math.floor(days / 30) + " months";
      } else {
        return days + " days";
      }
    } else if (minutesDiff >= 60) {
      return Math.floor(minutesDiff / 60) + " hours";
    } else {
      return Math.round(minutesDiff) + " minutes";
    }
  };

  const style = avatarSize ? "w-10 h-10 rounded-full" : "h-6 w-6 rounded-full";
  console.log(style);
  return (
    <div className="mb-5">
      <div className="flex gap-x-3 items-start">
        <img src={authorProfileImageUrl} alt="profile" className={style} />
        <div className="flex flex-col gap-y-0.5">
          <h4 className="text-[13px] font-semibold inline">
            {authorDisplayName}
            <span className="text-xs font-light text-neutral-400 pl-2">
              {getdays(publishedAt) + " ago"}
            </span>
          </h4>

          <span className="text-sm mb-1.5">{textOriginal}</span>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
              className="inline mr-2 hover:bg-neutral-800"
            >
              <path
                d="M15.77 7H11.54L13.06 2.06C13.38 1.03 12.54 0 11.38 0C10.8 0 10.24 0.24 9.86 0.65L4 7H0V17H4H5H14.43C15.49 17 16.41 16.33 16.62 15.39L17.96 9.39C18.23 8.15 17.18 7 15.77 7ZM4 16H1V8H4V16ZM16.98 9.17L15.64 15.17C15.54 15.65 15.03 16 14.43 16H5V7.39L10.6 1.33C10.79 1.12 11.08 1 11.38 1C11.64 1 11.88 1.11 12.01 1.3C12.08 1.4 12.16 1.56 12.1 1.77L10.58 6.71L10.18 8H11.53H15.76C16.17 8 16.56 8.17 16.79 8.46C16.92 8.61 17.05 8.86 16.98 9.17Z"
                fill="white"
              />
            </svg>
            <span className="mr-2 text-neutral-400 text-[13px]">
              {likeCount}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="inline"
            >
              <path
                d="M5.23 13H9.46L7.94 17.94C7.62 18.97 8.46 20 9.62 20C10.2 20 10.76 19.76 11.14 19.35L17 13H21L21 3H17H16H6.57C5.51 3 4.59 3.67 4.38 4.61L3.04 10.61C2.77 11.85 3.82 13 5.23 13ZM17 4H20L20 12H17V4ZM4.02 10.83L5.36 4.83C5.46 4.35 5.97 4 6.57 4H16V12.61L10.4 18.67C10.21 18.88 9.92 19 9.62 19C9.36 19 9.12 18.89 8.99 18.7C8.92 18.6 8.84 18.44 8.9 18.23L10.42 13.29L10.82 12H9.47H5.24C4.83 12 4.44 11.83 4.21 11.54C4.08 11.39 3.95 11.14 4.02 10.83Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
