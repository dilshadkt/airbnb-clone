import React, { useEffect, useState } from "react";
import Buttons from "../../../components/Buttons";
import listpad from "../../../asset/svg/listpad.svg";
import help1 from "../../../asset/svg/help1.svg";
import help2 from "../../../asset/stuff/Rectangle 43.png";
import help3 from "../../../asset/stuff/Rectangle 42.png";
import help4 from "../../../asset/stuff/Rectangle 44.png";
import help5 from "../../../asset/stuff/Rectangle 45.png";
import { useNavigate } from "react-router-dom";
import axios from "../../../config/axiosConfig";
import Reservation from "./reservation/Reservation";
import ListShimmer from "../../../components/shimmer/list/ListShimmer";
import notfound from "./not.png";

const Hoisting = () => {
  const [resrvation, setReservation] = useState([]);
  const [fileterdReservation, setFilteredReservation] = useState([]);
  const [checkout, setCheckout] = useState(0);
  const [currenlty, setCurrently] = useState(0);
  const [arrving, setArriving] = useState(0);
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("NewUser"));

  const checkingOut = (e) => {
    const text = e.target.textContent.split(" ")[0];
    setSelected(text);
    switch (text) {
      case "checking":
        setFilteredReservation(checkout);
        break;
      case "Currently":
        setFilteredReservation(currenlty);
        break;
      case "Arriving":
        setFilteredReservation(arrving);
        break;
      case "Pending":
        setFilteredReservation(null);
        break;
      default:
        setFilteredReservation(resrvation);
    }
  };
  useEffect(() => {
    axios
      .get(`/book/stay`)
      .then((res) => {
        setReservation(res.data);
        console.log(res.data);

        setFilteredReservation(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    let dateObj = new Date();
    const checkouts = resrvation?.filter(
      (item) =>
        new Date(JSON.parse(item.checkoutDate)).toDateString() >
        new Date().toDateString()
    );
    setCheckout(checkouts);
    const currentlys = resrvation?.filter(
      (item) =>
        new Date(JSON.parse(item.checkInDate)).toDateString() ===
        new Date().toDateString()
    );
    setCurrently(currentlys);
    const arriving = resrvation?.filter(
      (item) =>
        new Date(JSON.parse(item.checkInDate)) <
        dateObj.setDate(dateObj.getDate() + 7)
    );
    setArriving(arriving);
  }, [resrvation]);

  return (
    <div className="m-20 sm:m-5 ">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold  sm:text-xl">
          Welcome,{user.firstName} !{" "}
        </h1>

        <div onClick={() => navigate("/become-a-host")}>
          <Buttons width="w-[246px] sm:w-fit" title="Complete your listing" />
        </div>
      </div>
      <div className="flex justify-between my-6 mt-8">
        <h4 className="  text-xl font-medium">Your reservations</h4>
        <span
          onClick={() => {
            setFilteredReservation(resrvation);
          }}
          className="underline font-medium cursor-pointer"
        >
          All reservation ({resrvation.length})
        </span>
      </div>

      <div className="flex sm:hidden">
        <div
          onClick={(e) => checkingOut(e)}
          className={`${
            selected.includes("checking") && `bg-black text-white`
          } border rounded-full px-6 py-2 mr-3 cursor-pointer hover:border-slate-950`}
        >
          checking out <span className="font-medium">({checkout.length})</span>
        </div>
        <div
          onClick={(e) => checkingOut(e)}
          className={`${
            selected.includes("Currently") && `bg-black text-white`
          } border rounded-full px-6 py-2 mr-3 cursor-pointer hover:border-slate-950`}
        >
          Currently hosting ({currenlty.length})
        </div>
        <div
          onClick={(e) => checkingOut(e)}
          className={`${
            selected.includes("Arriving") && `bg-black text-white`
          } border rounded-full px-6 py-2 mr-3 cursor-pointer hover:border-slate-950`}
        >
          Arriving soon ({arrving.length})
        </div>
        <div
          onClick={(e) => checkingOut(e)}
          className={`${
            selected.includes("Pending") && `bg-black text-white`
          } border rounded-full px-6 py-2 mr-3 cursor-pointer hover:border-slate-950`}
        >
          Pending reviews(0)
        </div>
      </div>
      {resrvation === false ? (
        <div className="w-full bg-gray-100 flex items-center justify-center min-h-[239px] rounded-xl my-7">
          <div className=" flex flex-col items-center">
            <img src={listpad} alt="list pad" />
            <h4 className="text-center w-[172px] text-sm mt-2">
              You dont have any guest checking out today or tommorow
            </h4>
          </div>
        </div>
      ) : resrvation.length === 0 ? (
        <ListShimmer />
      ) : (
        <div className="my-[5%]">
          <div className="flex w-full p-3 bg-red-400 rounded-xl text-white">
            <ul className="flex justify-around w-full mr-[4%]">
              <li>Peoperty</li>
              <li>checkIn date</li>
              <li>checkOut date</li>
              <li>booking date</li>
              <li>total</li>
            </ul>
          </div>
          {fileterdReservation ? (
            fileterdReservation.map((item, index) => (
              <Reservation key={index} item={item} />
            ))
          ) : (
            <div className="flex  items-center justify-center">
              <img src={notfound} alt="not found" />
            </div>
          )}
        </div>
      )}
      <h4 className="text-xl font-medium"> We’re here to help</h4>
      <div className="flex my-6">
        <div className="border rounded-xl p-5 flex mr-6">
          <div className=" flex-initial w-[15%] flex items-center justify-center">
            <img src={help1} alt="icons" />
          </div>
          <div className="flex-1 ml-   h-fit">
            <h4 className="text-base font-medium">Join your local host club</h4>
            <p className="text-sm max-w-[350px]">
              Connect,collaborate and share with other hosts and comminity
              member
            </p>
          </div>
        </div>
        <div className="border rounded-xl p-5 flex mr-6">
          <div className=" flex-initial w-[15%] flex items-center justify-center">
            <img src={help1} alt="icons" />
          </div>
          <div className="flex-1 ml-   h-fit">
            <h4 className="text-base font-medium">Join your local host club</h4>
            <p className="text-sm max-w-[350px]">
              Connect,collaborate and share with other hosts and comminity
              member
            </p>
          </div>
        </div>
      </div>
      <h4 className="text-xl font-medium">Resources and tips</h4>
      <div className="my-6 flex w-full justify-between sm:flex-wrap">
        <div className="w-[23.5%] sm:w-[48%] border-2 flex flex-col items-center rounded-3xl cursor-pointer">
          <img src={help2} alt="help one" className="w-full object-fill" />
          <h4 className="py-6">How to get piad for hosting</h4>
        </div>
        <div className="w-[23.5%] sm:w-[48%] border-2 flex flex-col items-center rounded-3xl cursor-pointer">
          <img src={help3} alt="help one" className="w-full object-fill" />
          <h4 className="py-6">How to take greate photo with your phone</h4>
        </div>
        <div className="w-[23.5%] sm:w-[48%] border-2 flex flex-col items-center rounded-3xl cursor-pointer">
          <img src={help4} alt="help one" className="w-full object-fill" />
          <h4 className="py-6">Make your home ready for customer</h4>
        </div>
        <div className="w-[23.5%] sm:w-[48%] border-2 flex flex-col items-center rounded-3xl cursor-pointer">
          <img src={help5} alt="help one" className="w-full object-fill" />
          <h4 className="py-6">How to write a listing description that work</h4>
        </div>
      </div>
    </div>
  );
};

export default Hoisting;
