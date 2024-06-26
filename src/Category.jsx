import React, { Fragment, useState } from "react";
import roundeArrow from "./asset/svg/roundeArrow.svg";
import { data } from "./asset/host/data";
import axios from "./config/axiosConfig";
import filter from "./asset/svg/fiter.svg";
import { useDispatch } from "react-redux";
import { setProperty } from "./store/slice/PropertySlice";
import FilterMenu from "./components/FilterMenu";
import { useLocation } from "react-router-dom";
import { nanoid } from "nanoid";

const Category = () => {
  const [isFilteOpen, setFilterOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dipatch = useDispatch();
  const { pathname } = useLocation();
  const filterList = (title) => {
    dipatch(setProperty([]));
    axios
      .get(`listings/data?type=${title}`)
      .then((res) => {
        console.log(res.data);
        dipatch(setProperty(res.data));
      })
      .catch((err) => console.log(err));
  };
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < Math.round(data.length / 9)) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div
      className={`h-20 ${
        pathname === "/" ? `flex` : `hidden`
      } md:px-20 shadow md:shadow-md `}
    >
      <div className="flex-1  flex overflow-x-scroll scrollbar-hide relative z-20 ">
        <div
          className={`absolute hidden md:flex  right-0  ${
            currentIndex === Math.round((data.length - 1) / 9)
              ? `invisible`
              : `visible`
          } bg-white h-full flex items-center w-8 justify-center z-10 opacity-80`}
        >
          <img src={roundeArrow} onClick={goToNext} alt="arrow" />
        </div>
        <div
          className={`absolute hidden md:flex  left-0  ${
            currentIndex === 0 ? `invisible` : `visible`
          }  bg-white h-full flex items-center w-8 justify-center z-10 opacity-80`}
        >
          <img
            src={roundeArrow}
            onClick={goToPrevious}
            className="rotate-180"
            alt="arrow"
          />
        </div>

        <div
          style={{ transform: `translateX(-${currentIndex * 15}%)` }}
          className={`flex transition-transform duration-700`}
        >
          {data.map((item, index) => (
            <Fragment key={index}>
              <div
                onClick={() => filterList(item.title)}
                className="px-5   h-full group  flex items-center justify-center cursor-pointer relative"
              >
                <div
                  key={nanoid()}
                  className="flex w-8 md:w-full flex-col justify-center items-center opacity-90 md:opacity-70  group-hover:opacity-100 "
                >
                  {item.img}

                  <span className="whitespace-nowrap text-xs md:text-sm mt-1">
                    {item.title}
                  </span>
                </div>
                <div className="absolute bottom-0 hidden m-auto left-0 group-hover:flex w-[60%] right-0 bg-gray-300 h-[3px]"></div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="hidden  flex-initial w-1/4  md:flex items-center justify-end">
        <div
          onClick={() => setFilterOpen(true)}
          className="w-28 h-12  border flex items-center justify-center rounded-xl cursor-pointer"
        >
          <img src={filter} alt="filter" />
          <span className="text-sm ml-2 ">Filter </span>
        </div>

        <div className="w-48 ml-3 h-12  border md:flex items-center justify-center rounded-xl cursor-pointer hidden ">
          <span>Display before taxes</span>
        </div>
      </div>
      {isFilteOpen ? (
        <>
          <FilterMenu filter={setFilterOpen} />
        </>
      ) : (
        <>{(document.body.style.overflow = "")}</>
      )}
    </div>
  );
};

export default Category;
