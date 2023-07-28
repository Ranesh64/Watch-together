/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const SearchSuggestions = ({ suggestionList, inputRef }) => {
  const [width, setWidth] = useState(0);
  //   const [topPosition, setTopPosition] = useState(0);
  const [leftPosition, setLeftPosition] = useState(0);

  useEffect(() => {
    if (inputRef.current) {
      const inputWidth = inputRef.current.getBoundingClientRect().width;
      const inputLeft = inputRef.current.getBoundingClientRect().left;

      setWidth(inputWidth);
      setLeftPosition(inputLeft);
    }
  });
  return (
    <div
      className="fixed top-14 bg-neutral-800 box-border py-4 rounded-xl border-gray-100 z-20"
      style={{ width: `${width}px`, left: `${leftPosition}px` }}
    >
      <ul>
        {suggestionList.map((result, index) => {
          return (
            <li
              key={index}
              className="py-1.5 px-5 flex items-center gap-x-4 hover:bg-neutral-700"
            >
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M17.87 17.17L12.28 11.58C13.35 10.35 14 8.75 14 7C14 3.13 10.87 0 7 0C3.13 0 0 3.13 0 7C0 10.87 3.13 14 7 14C8.75 14 10.35 13.35 11.58 12.29L17.17 17.88L17.87 17.17ZM7 13C3.69 13 1 10.31 1 7C1 3.69 3.69 1 7 1C10.31 1 13 3.69 13 7C13 10.31 10.31 13 7 13Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="text-white font-semibold text-">{result}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchSuggestions;
