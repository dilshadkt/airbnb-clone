import axios from "../../../config/axiosConfig";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import left from "../../../asset/svg/leftArrow.svg";
import MyContext from "../../../components/contex/Mycontex";
import PriceSlip from "../../../components/PriceSlip";
import { loginOpen } from "../../../store/slice/Auth";
const Payment = () => {
  const dispatch = useDispatch();
  const login = useSelector((store) => store.user.isLogin);
  const [queryParam] = useSearchParams();
  const user = useSelector((store) => store.user.user);
  const [owner, setOwner] = useState({});
  const { startDate, guest, endDate } = useContext(MyContext);
  useEffect(() => {
    axios
      .get(`/listings/user/${queryParam.get("propertyId")}`)
      .then((res) => setOwner(res.data))
      .catch((err) => console.log(err));
  }, [queryParam]);
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const totalprice = {
      amount: Number(queryParam.get("grandTotal")).toFixed(0),
    };

    const result = await axios.post("/payment/orders", totalprice);
    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_8c2zeWAe00TVFz", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Dilshad KT",
      description: "Order Transaction",

      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post("/payment/success", data);

        if (result.data.msg === "success") {
          reservation();
        }
      },
      prefill: {
        name: owner.firstName,
        email: owner.email,
        contact: owner.phone,
      },
      notes: {
        address: "Dilshad near college",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const reservation = () => {
    const data = {
      guestId: user._id,
      listingId: queryParam.get("propertyId"),
      checkInDate: JSON.stringify(startDate),
      checkoutDate: JSON.stringify(endDate),
      totalPrice: queryParam.get("totalPrice"),
      bookingDate: new Date().toJSON().slice(0, 10),
    };
    axios
      .post(`/book/stay`, data)
      .then(() => {
        toast.success("succesfully ordered", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="md:mx-48 mx-5 my-8 flex flex-col md:flex-row">
        <div className="flex-1  flex flex-col ">
          <div className="flex items-center">
            <img src={left} alt="left arrow" />
            <h1 className="text-3xl ml-4">Confirm and pay</h1>
          </div>
          <div className="mt-5 md:mt-0 md:p-8">
            <h3 className="text-xl font-medium">Your trip</h3>
            <div className="flex  justify-between  my-5 items-start">
              <div className="flex flex-col  ">
                <h4 className="font-medium">Dates</h4>
                <span className="text-sm">
                  {startDate
                    ? `${startDate.getDate()} / ${
                        startDate.getMonth() + 1
                      } / ${startDate.getFullYear()}`
                    : "date"}
                </span>
              </div>
              <div className="flex items-start    ">
                <span className="font-medium underline cursor-pointer">
                  Edits
                </span>
              </div>
            </div>
            <div className="flex  justify-between  my-5 items-start">
              <div className="flex flex-col  ">
                <h4 className="font-medium">Guests</h4>
                <span className="text-sm">{guest} guest</span>
              </div>
              <div className="flex items-start    ">
                <span className="font-medium underline cursor-pointer">
                  Edits
                </span>
              </div>
            </div>
            <hr className="my-7" />
            <h3 className="text-xl font-medium mb-5">Pay with</h3>
            <select className="border px-5 py-4 rounded-lg my-1 w-full">
              <option>upi</option>
              <option>upi</option>
              <option>upi</option>
            </select>
            <input
              type="text"
              className="border px-5 py-4 rounded-lg  w-full my-1"
              placeholder="Virtual payment address"
            />
            <hr className="my-8" />
            <h3 className="text-xl font-medium ">Required for your trip</h3>
            <div className="py-6">
              <div className="flex  mb-5">
                <div className="flex-1 ">
                  <h3 className="font-medium">
                    Permanent Account Number (PAN)
                  </h3>
                  <span className="text-sm">
                    A valid PAN is required per Reserve Bank of India (RBI)
                    regulations.
                  </span>
                </div>
                <div className="flex-initial w-[15%]  flex justify-end">
                  <button className="border rounded-lg px-4 py-1 w-fit h-fit">
                    ADD
                  </button>
                </div>
              </div>
              <div className="flex  my-3">
                <div className="flex-1 ">
                  <h3 className="font-medium">Phone number</h3>
                  <span className="text-sm">
                    Add and confirm your phone number to get trip updates.
                  </span>
                </div>
                <div className="flex-initial w-[15%]  flex justify-end">
                  <button className="border rounded-lg px-4 py-1 w-fit h-fit">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="py-6">
              <h3 className="text-xl font-medium mb-2 ">Cancellation policy</h3>
              <h5 className="text-sm">
                This reservation is non-refundable .{" "}
                <span className="font-medium underline">Learn more</span>
              </h5>
            </div>
            <hr />
            <div className="py-6">
              <h3 className="text-xl font-medium mb-2 ">Ground rules</h3>
              <h6 className="text-sm">
                We ask every guest to remember a few simple things about what
                makes a great guest.
              </h6>

              <ul className="mt-3 ml-4 list-disc">
                <li className="text-sm my-2">Follow the house rules</li>
                <li className="text-sm my-2">
                  Treat your Host’s home like your own
                </li>
              </ul>
            </div>
            <hr />
            <div className="py-6">
              <p className="text-xs mb-5">
                By selecting the button below, I agree to the Host's House
                Rules, Ground rules for guests, Airbnb's Rebooking and Refund
                Policy and that Airbnb can charge my payment method if I’m
                responsible for damage.
              </p>
              <div
                // onClick={reservation}
                onClick={() =>
                  login ? displayRazorpay() : dispatch(loginOpen(true))
                }
                className="bg-rose-500 py-3 cursor-pointer px-5 w-fit rounded-xl  font-medium text-white"
              >
                Confirm and pay
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
        <div className="flex-initial md:w-[40%] w-full b flex justify-center ">
          <PriceSlip />
        </div>
      </div>
    </>
  );
};

export default Payment;
