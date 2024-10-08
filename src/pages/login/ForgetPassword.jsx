import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { forgetOpen } from "../../store/slice/Auth";
import cancel from "../../asset/svg/cancel.svg";
import validator from "validator";
import { useForm } from "react-hook-form";
import axios from "../../config/axiosConfig";
import LoopIcon from "@mui/icons-material/Loop";
import { loginOpen } from "../../store/slice/Auth";
import InputField from "../../components/shared/inputField/InputField";
import PrimaryButton from "../../components/shared/primaryButton";
const ForgetPassword = () => {
  const { register, watch } = useForm();
  const dispatch = useDispatch();
  const [isOtpSend, setIsOtpSend] = useState(false);
  const [error, setError] = useState(null);
  const [otpError, setOtpError] = useState(null);
  const [IsopenConfirmPassword, setIsOpenConfirmPassword] = useState(false);
  const [changeError, setChangeError] = useState(null);

  // Add this useEffect to handle body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // SEND EMAIL
  const sendEmail = () => {
    setError(null);
    if (watch().username === "") {
      return setError("username is required");
    }
    const valid = validator.isEmail(watch().username);
    if (valid) {
      setError(null);

      axios
        .post("/otp/request-otp", watch()) // REQUSTING FOR OTP
        .then((res) => {
          if (res.data.success) {
            setIsOtpSend(!isOtpSend);
          } else {
            setOtpError("Try later 😒");
          }
        })
        .catch((err) => console.log(err));
    } else {
      setError("enter valid email");
    }
  };
  // VERIFY OTP
  const verifyOtp = () => {
    setOtpError(null);
    if (watch().otp === "") {
      return setOtpError("Enter valid Otp");
    }
    axios
      .post("/otp/verify", watch()) // VERIFY OTP WITH USER ENTERD ONE
      .then(() => {
        setOtpError(null);
        setIsOpenConfirmPassword(!IsopenConfirmPassword);
        setIsOtpSend(false);
      })
      .catch((err) => {
        setOtpError(err.response.data.error);
      });
  };

  //  CHANGE PASSWORD
  const changePassword = () => {
    if (watch().password === watch().ConfirmPassword) {
      setChangeError(null);
      axios
        .post("otp/validate", watch())
        .then(() => {
          dispatch(forgetOpen(false));
          dispatch(loginOpen(true));
        })
        .catch((err) => console.log(err));
    } else {
      setChangeError("password is not match");
    }
  };
  return (
    <>
      <div className="fixed top-0  bottom-0 left-0 right-0 bg-black opacity-50 z-30 flex items-center justify-center"></div>
      <div className="fixed top-0 left-0 bottom-0 right-0 m-auto bg-white z-40 md:w-[30%] py-5 w-[90%] h-fit rounded-2xl  overflow-hidden">
        <div className="flex-intial h-[13%]  flex items-center">
          <div className="px-5 flex justify-between w-full">
            <div className=" flex-initial w-[10%]">
              <div
                onClick={() => dispatch(forgetOpen(false))}
                className=" w-9 h-9 hover:bg-gray-300 rounded-full flex items-center justify-center"
              >
                <img src={cancel} alt="cancel icon" className="w-[50%]" />
              </div>
            </div>

            <div className="flex-1  text-center w-full text-xl font-semibold">
              Change Your Password
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="text-[14px] my-4  text-gray-500">
            Lost your password ? Please enter your email address .You will
            recieve an OTP to create new password via email
          </div>
          <form>
            <InputField
              required={true}
              placeholder={"username"}
              register={register}
              name="username"
            />
            {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
            {isOtpSend && (
              <p className="text-xs text-green-500 mt-2">{"Otp sended"}</p>
            )}

            {isOtpSend && (
              <div className="mt-4">
                <div className="flex justify-between">
                  <p className="text-[15px]  font-light text-gray-500">
                    Enter your 4 digit otp number{" "}
                  </p>
                  <div
                    onClick={(e) => sendEmail(e)}
                    title="generate otp "
                    className="cursor-pointer transform hover:rotate-[50deg] transition-all delay-300"
                  >
                    <LoopIcon />
                  </div>
                </div>
                <input
                  type="password"
                  {...register("otp", { required: true, min: 7, max: 20 })}
                  required
                  placeholder="4 digit OTP"
                  className="w-full p-3 border rounded-lg my-3    "
                />
                {otpError && (
                  <p className="text-sm text-red-500 ">{otpError}</p>
                )}
              </div>
            )}
            {IsopenConfirmPassword && (
              <div>
                <InputField
                  type="password"
                  register={register}
                  name={"password"}
                  placeholder={"password"}
                  fieldStyle={"my-3"}
                />

                <InputField
                  type="password"
                  register={register}
                  name={"ConfirmPassword"}
                  placeholder={"confirm password"}
                  fieldStyle={"my-3"}
                />
                {changeError && (
                  <p className="text-sm text-red-500 ">{changeError}</p>
                )}
              </div>
            )}
            {isOtpSend ? (
              <PrimaryButton title={"Verify"} onclick={verifyOtp} />
            ) : IsopenConfirmPassword ? (
              <PrimaryButton
                title={"Change passsword"}
                onclick={changePassword}
              />
            ) : (
              <PrimaryButton title={"Send"} onclick={sendEmail} />
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
