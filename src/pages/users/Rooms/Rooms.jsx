import React, { useContext, useState } from "react";
import save from "../../../asset/svg/save.svg";
import { data } from "../../../asset/card/data";
import share from "../../../asset/svg/share.svg";
import room1 from "../../../asset/rooms/room1.jpg";
import room2 from "../../../asset/rooms/room2.jpg";
import room3 from "../../../asset/rooms/room3.png";
import room4 from "../../../asset/rooms/room4.png";
import room5 from "../../../asset/rooms/room5.png";
import bed from "../../../asset/svg/bed.svg";
import heritage from "../../../asset/svg/heritage.svg";
import Host from "../../../components/Host";
import Offers from "../../../components/Offers";
import Buttons from "../../../components/Buttons";
import PaymentCard from "../../../components/PaymentCard";
import Amenties from "../../../components/Amenties";
import MyContext from "../../../components/contex/Mycontex";
import left from "../../../asset/svg/leftArrow.svg";

const Rooms = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const { isOpenAmenities } = useContext(MyContext);

  return (
    <>
      <div className="mx-20 pb-8 ">
        <h1 className="text-2xl font-semibold my-5">
          Seaside Luxury: Sea View Room in Fort Tiracol
        </h1>
        <div className="flex justify-between">
          <div className="flex">
            <span className="underline mr-3">1 reviews</span>
            <span className="underline">Tricol,goa,india</span>
          </div>
          <div className=" flex">
            <div className="flex items-center">
              <img src={share} alt="share icon" />
              <span className="ml-2">share</span>
            </div>
            <div className="flex items-center ml-4">
              <img src={save} alt="save icon" />
              <span>save</span>
            </div>
          </div>
        </div>
        <div className="w-full h-[400px] flex mt-7 rounded-2xl overflow-hidden  relative">
          <div className=" flex-1  mr-2">
            <img
              src={room1}
              alt="room1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1  h-full flex flex-col">
            <div className="flex-1  mb-2 flex">
              <div className="flex-1 mr-2">
                <img
                  src={room2}
                  alt="room2 "
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1  ">
                <img
                  src={room3}
                  alt="room2 "
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex-1  flex">
              <div className="flex-1 mr-2">
                {" "}
                <img
                  src={room4}
                  alt="room2 "
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 ">
                {" "}
                <img
                  src={room5}
                  alt="room2 "
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsGalleryOpen(true)}
            className="bg-white px-5 cursor-pointer py-2 flex items-center justify-center border absolute rounded-xl bottom-5 right-5"
          >
            <span className="font-medium">show all </span>
          </div>
        </div>
        <div className="flex  mt-8">
          <div className="flex-1">
            <div className=" items-center justify-between flex">
              <h1 className="text-2xl">
                Room in a heritage hotel hosted by Sanchit
              </h1>
              <div className="w-11 h-11 rounded-full bg-black"></div>
            </div>
            <div className="flex justify-between my-6">
              <div className="border px-[8%] py-[2%] items-center justify-center rounded-lg">
                <div className="flex items-center ">
                  <img src={bed} alt="bed" />
                  <span>1 double bed</span>
                </div>
              </div>
              <div className="border px-[8%] py-[2%] items-center justify-center rounded-lg">
                <div className="flex items-center ">
                  <img src={bed} alt="bed" />
                  <span>1 double bed</span>
                </div>
              </div>
              <div className="border px-[8%] py-[2%] items-center justify-center rounded-lg">
                <div className="flex items-center ">
                  <img src={bed} alt="bed" />
                  <span>1 double bed</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="my-5">
              <div className="flex">
                <div className="flex-initial w-[15%]  flex items-center justify-center px-4 py-6">
                  <img src={heritage} alt="heritage" />
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-base font-medium">
                    Room in a heritage hotel
                  </h3>
                  <span className="text-gray-400">
                    Your own room in a home, plus access to shared spaces.
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="flex-initial w-[15%]  flex items-center justify-center px-4 py-6">
                  <img src={heritage} alt="heritage" />
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-base font-medium">
                    Room in a heritage hotel
                  </h3>
                  <span className="text-gray-400">
                    Your own room in a home, plus access to shared spaces.
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="flex-initial w-[15%]  flex items-center justify-center px-4 py-6">
                  <img src={heritage} alt="heritage" />
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-base font-medium">
                    Room in a heritage hotel
                  </h3>
                  <span className="text-gray-400">
                    Your own room in a home, plus access to shared spaces.
                  </span>
                </div>
              </div>
            </div>
            <hr />
            {/* host details */}
            <Host />
            <h3 className="font-semibold text-2xl">About this place</h3>
            <div className="text-base font-light my-3">
              Fort Tiracol is one of North Goa's most iconic forts turned into
              boutique hotel, just minutes from the Tiracol Jetty. You’ll love
              my place because of the comfortable bed, the high ceilings, the
              unrivaled views of the sea on one side and the river on the other,
              the food at our signature restaurant - The Tavern, the traditional
              Portuguese furniture, the location and service. Fort Tiracol is
              good for couples, solo adventurers & families
            </div>
            <div className="underline font-semibold my-5 cursor-pointer">
              Show more
            </div>
            <hr />
            <Offers />
          </div>
          <div className="flex-initial w-[40%] flex justify-center ">
            <PaymentCard />
          </div>
        </div>
        <hr />
        <h3 className="font-semibold text-2xl my-5">Seaside Luxury</h3>
        <p className="font-light mb-5">
          Each Airbnb Luxe reservation comes with a Trip Designer, your
          concierge, trip planner, and local destination expert. They know this
          home inside out.
        </p>
        <Buttons title="Message a trip designer" width="w-[246px]" />

        {isOpenAmenities ? (
          <>
            {(document.body.style.overflow = "hidden")}
            <Amenties />
          </>
        ) : (
          <>{(document.body.style.overflow = "")}</>
        )}
        <div
          className={`bg-white absolute top-0 right-0 left-0  p-5 ${
            isGalleryOpen ? `` : `hidden`
          }`}
        >
          <div className="flex justify-between">
            <div
              onClick={() => setIsGalleryOpen(false)}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300"
            >
              <img src={left} alt="left icon" />
            </div>

            <div className=" flex">
              <div className="flex items-center">
                <img src={share} alt="share icon" />
                <span className="ml-2">share</span>
              </div>
              <div className="flex items-center ml-4">
                <img src={save} alt="save icon" />
                <span>save</span>
              </div>
            </div>
          </div>
          <div className="my-9 flex justify-center">
            <div className="w-2/4 bg-red-500 h-fit">
              {data[0].images.map((item) => (
                <div className="w-full">
                  <img src={item} alt="gallery" className="w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;