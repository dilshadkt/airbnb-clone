import React, { useEffect, useState } from "react";
import save from "../../../asset/svg/save.svg";
import share from "../../../asset/svg/share.svg";
import heritage from "../../../asset/svg/heritage.svg";
import Host from "../../../components/Host";
import Offers from "../../../components/Offers";
import Buttons from "../../../components/Buttons";
import PaymentCard from "../../../components/PaymentCard";
import Amenties from "../../../components/Amenties";
import left from "../../../asset/svg/leftArrow.svg";
import { Link, useSearchParams } from "react-router-dom";
import axios from "../../../config/axiosConfig";
import RoomsShimmer from "../../../components/shimmer/Rooms/Rooms";
import { useSelector, useDispatch } from "react-redux";
import { setImg } from "../../../store/slice/payment";
import ImageCourosal from "../../../components/shared/ImageCourosal";
import { nanoid } from "nanoid";

const Rooms = () => {
  const dispatch = useDispatch();
  const amenties = useSelector((store) => store.user.amenties);

  const [queryParams] = useSearchParams();
  const [rooms, setRooms] = useState("");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [serchParams] = useSearchParams();
  const [isTrip, setIsTrip] = useState(false);
  const type = serchParams.get("id");
  const {
    aboutPlace,
    pricePeNight,
    description,
    place,
    title,
    images,
    availability,
    hostid,
    hostName,
    profile,
  } = rooms;
  const canelTrip = () => {
    setIsTrip(false);
    const tripId = serchParams.get("tripId");
    axios
      .delete(`/book/trip/${tripId}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setIsTrip(serchParams.get("booked") === "true" ? true : false);
    axios
      .get(`/listings?id=${type}`)
      .then((res) => {
        setRooms(res.data);
        dispatch(setImg(res.data.images[0]));
      })
      .catch((err) => console.log(err));
  }, [type, dispatch, serchParams]);

  return rooms === "" ? (
    <RoomsShimmer />
  ) : (
    <>
      <div className="md:mx-20 pb-8 ">
        {isTrip && (
          <div className="p-6 border flex justify-between rounded-xl bg-green-200 my-[2%]   border-lime-600">
            <h3>To cancel trip</h3>
            <div
              onClick={() => canelTrip()}
              className="text-white hover:text-green-700 hover:font-semibold cursor-pointer"
            >
              cancel
            </div>
          </div>
        )}

        <h1 className="hidden md:block text-2xl font-semibold my-5">{title}</h1>
        <div className=" flex justify-between items-center">
          <div className="hidden md:flex items-center">
            <span className="underline mr-3">1 reviews</span>
            <span className="underline">{place?.city},</span>
            <span className="underline">{place?.country}</span>
          </div>
          <div
            className=" flex my-5 md:my-0 items-center justify-between w-full md:w-fit
            mx-7 "
          >
            <Link to={"/"} className="flex md:hidden items-center">
              <img
                src="/assets/svg/right.svg"
                alt=""
                className="w-3 rotate-180"
              />
              <span className="text-base ml-2 font-semibold">Home</span>
            </Link>
            <div className=" flex items-center">
              <div className="flex items-center">
                <img src={share} alt="share icon" />
                <span className="hidden md:block ml-2">share</span>
              </div>
              <div className="flex items-center ml-4">
                <img src={save} alt="save icon" />
                <span className="hidden md:block">save</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery in desktop view */}
        <div className="hidden w-full h-[400px] md:flex mt-7 rounded-2xl overflow-hidden  relative -z-10 ">
          <div className=" flex-1  bg-gray-400 mr-2">
            <img
              src={images[0]}
              alt="room1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1  h-full flex flex-col">
            <div className="flex-1  mb-2 flex overflow-hidden">
              <div className="flex-1 mr-2 bg-gray-400">
                <img
                  src={images[1]}
                  alt="room2 "
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1  bg-gray-400 ">
                <img
                  src={images[2]}
                  alt="room2 "
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex-1  flex overflow-hidden">
              <div className="flex-1 mr-2 bg-gray-400">
                <img
                  src={images[3]}
                  alt="room2 "
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 bg-gray-400 ">
                <img
                  src={images[4]}
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
        {/* Gallery in mobile view */}
        <ImageCourosal images={images} />
        <div className="mx-7 md:mx-0">
          <div className="flex md:flex-row flex-col mt-4 md:mt-8">
            <div className="flex-1">
              <div className=" items-center justify-between flex">
                <h1 className="text-2xl font-semibold">{` ${title} `}</h1>
              </div>
              <div className="  md:hidden mt-2 flex font-medium capitalize">
                <span className=" mr-1">{place?.city},</span>
                <span className="mr-1  ">{place?.country}</span>
              </div>
              <div className="text-gray-600 text-sm md:text-base  mb-5 mb:mb-1">
                <span>{aboutPlace?.guests} guests</span>
                <span className="mx-2">{aboutPlace?.bedrooms} bedrooms</span>
                <span className="mx-2">{aboutPlace?.beds} beds</span>
                {aboutPlace?.bathrooms} bathrooms
              </div>
              <hr />
              <div className="flex items-center my-5">
                <div className="w-10 h-10 rounded-full bg-black"></div>
                <div className="ml-3 grid grid-cols-1">
                  <h5 className="capitalize font-semibold">{hostName}</h5>
                  <span className="text-sm text-gray-500">Emotion</span>
                </div>
              </div>
              <hr />
              <div className="my-5 grid  gap-2">
                {new Array(3).fill(" ").map((item) => (
                  <div key={nanoid()} className="flex ">
                    <div className="flex-initial flex items-center justify-center px-4 py-6">
                      <img src={heritage} alt="heritage" className="w-full" />
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-base font-medium">
                        Room in a heritage hotel
                      </h3>
                      <span className="text-gray-600 text-sm">
                        Your own room in a home, plus access to shared spaces.
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <hr />
              {/* host details */}
              <Host userIcon={profile} hostid={hostid} hostName={hostName} />
              <h3 className="font-semibold text-2xl">About this place</h3>
              <div className="text-base font-light my-3">{description}</div>
              <div className="underline font-semibold my-5 cursor-pointer">
                Show more
              </div>
              <hr />
              <Offers />
            </div>
            <div className="flex-initial md:w-[40%] w-full flex justify-center ">
              <PaymentCard
                night={pricePeNight}
                maxGuest={aboutPlace.guests}
                propertyId={queryParams.get("id")}
                availability={availability}
              />
            </div>
          </div>
          <hr />
          <h3 className="font-semibold text-2xl my-5">Seaside Luxury</h3>
          <p className="font-light mb-5">
            Each Airbnb Luxe reservation comes with a Trip Designer, your
            concierge, trip planner, and local destination expert. They know
            this home inside out.
          </p>
          <Buttons title="Message a trip designer" width="w-[246px]" />
          {amenties ? (
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
                {rooms.images.map((item, index) => (
                  <div key={index} className="w-full">
                    <img src={item} alt="gallery" className="w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="fixed md:hidden bottom-0 h-20 border-t bg-white  w-full px-7 grid grid-cols-2 items-center">
          <div className="grid ">
            <h4 className="font-semibold">
              59,024 <span className="font-medium text-sm">night</span>
            </h4>
            <span className="underline text-sm font-semibold">16-21 jul </span>
          </div>

          <Buttons
            color="bg-rose-500"
            width="w-full"
            title="Reserve"
            // path={`book/stay?pricePernight=${night}&checkin=${checkIn}&chekout=${checkOut}&totalPrice=${
            //   Number(night) * totalDays
            // }&totalDays=${totalDays}&airbnbTax=${
            //   (Number(night) * totalDays * 5) / 100
            // }&grandTotal=${
            //   Number(night) * totalDays + (Number(night) * totalDays * 5) / 100
            // }&propertyId=${propertyId}`}
            path={`book/stay`}
          />
        </div>
      </div>
    </>
  );
};

export default Rooms;
