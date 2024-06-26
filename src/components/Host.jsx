import React from "react";
import star from "../asset/svg/rating.svg";
import global from "../asset/svg/global.svg";
import { useNavigate } from "react-router-dom";

const Host = ({ userIcon, hostid, hostName }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="my-5 ">
        <h2 className="text-2xl font-medium">Meet your Host</h2>
        <div className="  md:my-9 flex flex-col items-center justify-center rounded-2xl">
          <div className="w-full md:w-96">
            <div className="md:w-96  h-60 shadow-2xl border flex bg-white  mt-11 mb-6 rounded-2xl">
              <div className="flex-1  flex items-center justify-end">
                <div className=" flex flex-col items-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center">
                    {userIcon ? (
                      <img
                        src={userIcon}
                        alt="person logo"
                        className="w-full h-full object-fill"
                      />
                    ) : (
                      <p></p>
                    )}
                  </div>
                  <h4 className="font-semibold text-2xl  mt-2">{hostName}</h4>
                  <span>host</span>
                </div>
              </div>
              <div className="flex-1  mr-6 flex justify-end  py-6  ">
                <div className="flex flex-col justify-around h-full">
                  <div>
                    <span className="text-xl font-bold">26</span>
                    <h5 className="text-xs">Reviews</h5>
                  </div>
                  <hr className="w-[50%]" />
                  <div>
                    <span className="text-xl font-bold flex">
                      4.8
                      <img src={star} alt="rating icon" />
                    </span>
                    <h5 className="text-xs">Rating</h5>
                  </div>
                  <hr className="w-[50%]" />
                  <div>
                    <span className="text-xl font-bold">5</span>
                    <h5 className="text-xs">Years of hosting</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <img src={global} alt="global icon" />
              <span className="ml-2">Lives in Gurugram, India</span>
            </div>
            <div className="mt-4">
              {" "}
              Hey! I am Sanchit and I operate some of India's most unique
              boutique stays: Wildlife Lodges, Ayurveda Inspired Retreats,
              Boutique Hotels and Hill Stays! I love food, adventure and unique
              experience - all of it reflects in all my properties, feel free to
              get in touch!
            </div>
            <div className="underline font-semibold my-5 ">Show more</div>
            <div
              onClick={() => navigate(`/chats?propertyId=${hostid}`)}
              className="px-5 my-4 py-2 bg-black rounded-xl w-fit font-medium flex items-center justify-center text-white cursor-pointer"
            >
              Message{" "}
            </div>
            <hr />
            <h4 className="my-4 font-semibold">co-host</h4>
            <div className="flex justify-between my-3">
              <div className="flex items-center">
                <div className="w-11 h-11 rounded-full bg-black mr-2"></div>
                <h4>Niyas</h4>
              </div>
              <div className="flex items-center">
                <div className="w-11 h-11 rounded-full bg-black mr-2"></div>
                <h4>Niyas</h4>
              </div>
              <div className="flex items-center">
                <div className="w-11 h-11 rounded-full bg-black mr-2"></div>
                <h4>Niyas</h4>
              </div>
            </div>
            <hr />
            <div className="text-xs font-light text-gray-400 my-7">
              To protect your payment, never transfer money or communicate
              outside of the Airbnb website or app.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Host;
