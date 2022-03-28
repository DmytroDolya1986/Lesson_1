import React from "react";
import { useDimensions } from "./useDimensions";

const Dimensions = () => {
  const dimensions = useDimensions();
  const {width, height} = dimensions;

  return <div className='dimesions'>{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
