import React, { useState } from "react";
import cardIcon from "./asset/svg/cardIcon.svg";

const Category = () => {
  const [slide, setSlide] = useState(0);
  return (
    <div className="h-20  mx-20 flex">
      <div className="flex-1  flex overflow-x-scroll scrollbar-hide relative">
        <div className="absolute  right-0  bg-white h-full flex items-center w-8 justify-center z-10 opacity-80">
          <svg
            onClick={() => setSlide(slide + 1)}
            className="backdrop-blur-sm"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_13_246)">
              <path
                d="M12.5 0C5.60547 0 0 5.60547 0 12.5C0 19.3945 5.60547 25 12.5 25C19.3945 25 25 19.3945 25 12.5C25 5.60547 19.3945 0 12.5 0ZM12.5 23.75C6.28906 23.75 1.25 18.7109 1.25 12.5C1.25 6.28906 6.28906 1.25 12.5 1.25C18.7109 1.25 23.75 6.28906 23.75 12.5C23.75 18.7109 18.7109 23.75 12.5 23.75ZM9.60938 7.5L14.375 12.5L9.60938 17.5H12.2461L16.875 12.5L12.2461 7.5H9.60938Z"
                fill="#0A0A0A"
              />
            </g>
            <defs>
              <clipPath id="clip0_13_246">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        {/* categorized icons */}

        <div className={`flex -translate-x-[]`}>
          <div className="px-6  h-full  flex items-center justify-center">
            <div className="flex flex-col items-center opacity-70 hover:opacity-100 ">
              <img src={cardIcon} alt="icons" />

              <span>Beach</span>
            </div>
          </div>
          <div className="px-6  h-full  flex items-center justify-center">
            <div className="flex flex-col items-center opacity-70 hover:opacity-100 ">
              <img src={cardIcon} alt="icons" />

              <span>Beach</span>
            </div>
          </div>
          <div className="px-6  h-full  flex items-center justify-center">
            <div className="flex flex-col items-center opacity-70 hover:opacity-100 ">
              <img src={cardIcon} alt="icons" />

              <span>Beach</span>
            </div>
          </div>
          <div className="px-6  h-full  flex items-center justify-center">
            <div className="flex flex-col items-center opacity-70 hover:opacity-100 ">
              <img src={cardIcon} alt="icons" />

              <span>Beach</span>
            </div>
          </div>
          <div className="px-6  h-full  flex items-center justify-center">
            <div className="flex flex-col items-center opacity-70 hover:opacity-100 ">
              <img src={cardIcon} alt="icons" />

              <span>Beach</span>
            </div>
          </div>
          <div className="px-6  h-full  flex items-center justify-center">
            <div className="flex flex-col items-center opacity-70 hover:opacity-100 ">
              <img src={cardIcon} alt="icons" />

              <span>Beach</span>
            </div>
          </div>
          <div className="px-6  h-full  flex items-center justify-center">
            <div className="flex flex-col items-center opacity-70 hover:opacity-100 ">
              <img src={cardIcon} alt="icons" />

              <span>Beach</span>
            </div>
          </div>
          <div className="px-6  h-full  flex items-center justify-center">
            <div className="flex flex-col items-center opacity-70 hover:opacity-100 ">
              <img src={cardIcon} alt="icons" />

              <span>Beach</span>
            </div>
          </div>
          <div className="px-6  h-full  flex items-center justify-center">
            <div className="flex flex-col items-center opacity-70 hover:opacity-100 ">
              <img src={cardIcon} alt="icons" />

              <span>Beach</span>
            </div>
          </div>
          <div className="px-6  h-full  flex items-center justify-center">
            <div className="flex flex-col items-center opacity-70 hover:opacity-100 ">
              <img src={cardIcon} alt="icons" />

              <span>Beach</span>
            </div>
          </div>
          <div className="px-6  h-full  flex items-center justify-center">
            <div className="flex flex-col items-center opacity-70 hover:opacity-100 ">
              <img src={cardIcon} alt="icons" />

              <span>Beach</span>
            </div>
          </div>
          <div className="px-6  h-full  flex items-center justify-center">
            <div className="flex flex-col items-center opacity-70 hover:opacity-100 ">
              <img src={cardIcon} alt="icons" />

              <span>Beach</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-initial w-1/4  flex items-center justify-end">
        <div className="w-28 h-12  border flex items-center justify-center rounded-xl">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4688 10.5C12.4688 10.674 12.3996 10.841 12.2765 10.964C12.1535 11.0871 11.9865 11.1562 11.8125 11.1562H2.625C2.45095 11.1562 2.28403 11.0871 2.16096 10.964C2.03789 10.841 1.96875 10.674 1.96875 10.5C1.96875 10.326 2.03789 10.159 2.16096 10.036C2.28403 9.91289 2.45095 9.84375 2.625 9.84375H11.8125C11.9865 9.84375 12.1535 9.91289 12.2765 10.036C12.3996 10.159 12.4688 10.326 12.4688 10.5ZM19.0312 10.5C19.0312 10.674 18.9621 10.841 18.839 10.964C18.716 11.0871 18.549 11.1562 18.375 11.1562H15.75C15.576 11.1562 15.409 11.0871 15.286 10.964C15.1629 10.841 15.0938 10.674 15.0938 10.5C15.0938 10.326 15.1629 10.159 15.286 10.036C15.409 9.91289 15.576 9.84375 15.75 9.84375H18.375C18.549 9.84375 18.716 9.91289 18.839 10.036C18.9621 10.159 19.0312 10.326 19.0312 10.5Z"
              fill="black"
            />
            <path
              d="M16.4062 10.5C16.4062 11.9477 15.2289 13.125 13.7812 13.125C12.3336 13.125 11.1562 11.9477 11.1562 10.5C11.1562 9.05231 12.3336 7.875 13.7812 7.875C15.2289 7.875 16.4062 9.05231 16.4062 10.5ZM12.4688 10.5C12.4688 11.2238 13.0574 11.8125 13.7812 11.8125C14.5051 11.8125 15.0938 11.2238 15.0938 10.5C15.0938 9.77616 14.5051 9.1875 13.7812 9.1875C13.0574 9.1875 12.4688 9.77616 12.4688 10.5ZM8.53125 17.0625C8.53125 17.2365 8.46211 17.4035 8.33904 17.5265C8.21597 17.6496 8.04905 17.7188 7.875 17.7188H2.625C2.45095 17.7188 2.28403 17.6496 2.16096 17.5265C2.03789 17.4035 1.96875 17.2365 1.96875 17.0625C1.96875 16.8885 2.03789 16.7215 2.16096 16.5985C2.28403 16.4754 2.45095 16.4062 2.625 16.4062H7.875C8.04905 16.4062 8.21597 16.4754 8.33904 16.5985C8.46211 16.7215 8.53125 16.8885 8.53125 17.0625ZM19.0312 17.0625C19.0312 17.2365 18.9621 17.4035 18.839 17.5265C18.716 17.6496 18.549 17.7188 18.375 17.7188H11.8125C11.6385 17.7188 11.4715 17.6496 11.3485 17.5265C11.2254 17.4035 11.1562 17.2365 11.1562 17.0625C11.1562 16.8885 11.2254 16.7215 11.3485 16.5985C11.4715 16.4754 11.6385 16.4062 11.8125 16.4062H18.375C18.549 16.4062 18.716 16.4754 18.839 16.5985C18.9621 16.7215 19.0312 16.8885 19.0312 17.0625Z"
              fill="black"
            />
            <path
              d="M12.4688 17.0625C12.4688 18.5102 11.2914 19.6875 9.84375 19.6875C8.39606 19.6875 7.21875 18.5102 7.21875 17.0625C7.21875 15.6148 8.39606 14.4375 9.84375 14.4375C11.2914 14.4375 12.4688 15.6148 12.4688 17.0625ZM8.53125 17.0625C8.53125 17.7863 9.11991 18.375 9.84375 18.375C10.5676 18.375 11.1562 17.7863 11.1562 17.0625C11.1562 16.3387 10.5676 15.75 9.84375 15.75C9.11991 15.75 8.53125 16.3387 8.53125 17.0625ZM6.5625 3.9375C6.5625 4.11155 6.49336 4.27847 6.37029 4.40154C6.24722 4.52461 6.0803 4.59375 5.90625 4.59375H2.625C2.45095 4.59375 2.28403 4.52461 2.16096 4.40154C2.03789 4.27847 1.96875 4.11155 1.96875 3.9375C1.96875 3.76345 2.03789 3.59653 2.16096 3.47346C2.28403 3.35039 2.45095 3.28125 2.625 3.28125H5.90625C6.0803 3.28125 6.24722 3.35039 6.37029 3.47346C6.49336 3.59653 6.5625 3.76345 6.5625 3.9375ZM19.0312 3.9375C19.0312 4.11155 18.9621 4.27847 18.839 4.40154C18.716 4.52461 18.549 4.59375 18.375 4.59375H9.84375C9.6697 4.59375 9.50278 4.52461 9.37971 4.40154C9.25664 4.27847 9.1875 4.11155 9.1875 3.9375C9.1875 3.76345 9.25664 3.59653 9.37971 3.47346C9.50278 3.35039 9.6697 3.28125 9.84375 3.28125H18.375C18.549 3.28125 18.716 3.35039 18.839 3.47346C18.9621 3.59653 19.0312 3.76345 19.0312 3.9375Z"
              fill="black"
            />
            <path
              d="M10.5 3.9375C10.5 5.38519 9.32269 6.5625 7.875 6.5625C6.42731 6.5625 5.25 5.38519 5.25 3.9375C5.25 2.48981 6.42731 1.3125 7.875 1.3125C9.32269 1.3125 10.5 2.48981 10.5 3.9375ZM6.5625 3.9375C6.5625 4.66134 7.15116 5.25 7.875 5.25C8.59884 5.25 9.1875 4.66134 9.1875 3.9375C9.1875 3.21366 8.59884 2.625 7.875 2.625C7.15116 2.625 6.5625 3.21366 6.5625 3.9375Z"
              fill="black"
            />
          </svg>

          <span className="text-sm ml-2 ">Filter </span>
        </div>
        <div className=""></div>
        <div className="w-48 ml-3 h-12  border flex items-center justify-center rounded-xl">
          <span>Display before taxes</span>
        </div>
      </div>
    </div>
  );
};

export default Category;