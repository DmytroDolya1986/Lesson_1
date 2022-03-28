import React, { memo } from "react";

const ResetBtn = ({ onReset }) => {
  console.log("===> Reset btn");
  return (
    <button className="reset-btn"
      onClick={onReset}
    >
      Reset
    </button>
  );
};

export default memo(ResetBtn);