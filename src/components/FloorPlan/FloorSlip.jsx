import React from "react";

const FloorSlip = ({ title, count, setCount }) => {
  return (
    <div>
      <div className="py-6 flex items-center justify-between ">
        <h3>{title}</h3>
        <div className="flex  items-center">
          <div
            onClick={() => count > 1 && setCount(count - 1)}
            className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer"
          >
            -
          </div>
          <div className="w-8 flex justify-center">{count}</div>
          <div
            onClick={() => setCount(count + 1)}
            className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer"
          >
            +
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default FloorSlip;
