import axios from "../../../config/axiosConfig";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WishListCard from "../../../components/WishListCard";
import WishShimmer from "../../../components/shimmer/usreList/WishShimmer";
import { setLike } from "../../../store/slice/InteractionSlice";

const WishList = () => {
  const user = useSelector((store) => store.user.user);
  const [data, setData] = useState([]);
  const dipatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/addWishList/${user._id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [user._id]);
  const remove = (id) => {
    setData((prev) => prev.filter((item) => item.propertyId !== id));
    axios
      .delete(`/addWishList?propertyId=${id}`)
      .then((res) => {
        setData(res.data);
        dipatch(
          setLike(JSON.stringify(res.data.map((item) => item.propertyId)))
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mx-20 my-10">
      <h1 className="text-3xl font-semibold">Wishlists</h1>

      <div className="my-10 ">
        {data === false ? (
          <div>
            <h3 className="text-xl font-medium">Create your first wishlist</h3>
            <p className="text-sm text-gray-500  w-[30%] py-4">
              As you search, click the heart icon to save your favourite places
              and Experiences to a wishlist.
            </p>
          </div>
        ) : data.length ? (
          <WishListCard data={data} remove={remove} />
        ) : (
          <WishShimmer />
        )}
      </div>
    </div>
  );
};

export default WishList;
