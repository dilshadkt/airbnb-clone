import React, { useState } from "react";
import rating from "../../../../asset/svg/rating.svg";
import arrow from "../../../../asset/svg/Arrow.svg";
import { useNavigate } from "react-router-dom";
const Card = ({ data, status }) => {
  const [currentImg, setCurrentImage] = useState(0);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`listing?id=${data._id}&status=${status}`)}
      className=" h-full mb-10 cursor-pointer z-0 mx-3"
    >
      <div className="w-full h-80  items-center justify-center relative ">
        <div className="absolute w-full  opacity-0 group-hover:opacity-100    px-4 top-2/4 flex justify-between">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImage(
                currentImg === 0 ? data.images.length - 1 : currentImg - 1
              );
            }}
            className="w-8 h-8 bg-white flex items-center  justify-center rounded-full hover:scale-105"
          >
            <img
              src={arrow}
              alt="arrow icons"
              className="rotate-90 opacity-50 w-4 object-cover"
            />
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImage(
                currentImg >= data.images.length - 1 ? 0 : currentImg + 1
              );
            }}
            className="w-8 h-8 bg-white flex items-center justify-center rounded-full hover:scale-105"
          >
            <img
              src={arrow}
              alt="arrow icons"
              className="-rotate-90 opacity-50 w-4"
            />
          </div>
        </div>
        <img
          alt="img"
          src={data.images[currentImg]}
          className="w-full h-full object-cover  rounded-xl "
        />
      </div>
      <div className="px-2">
        <div className="flex justify-between ">
          <span className="font-medium mt-5">
            {data?.title?.slice(0, 16)}...
          </span>
          <span className="flex items-center">
            <img src={rating} alt="raitng icon" />
            {data.rating}
          </span>
        </div>
        <div className="text-gray-500 font-light">374 kilometer away</div>
        <div className="text-gray-500 font-light">1-6 Nov</div>

        <div className="flex">
          <span className="font-medium">₹14000</span>
          <span className="font-light ml-2">night</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
