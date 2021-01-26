import React, { memo, useEffect, useState } from "react";

const TimeCounter = ({ stopCounter }) => {
  const [stateTime, setTime] = useState({ minute: 5, second: 0 });
  useEffect(() => {
    if (stateTime.minute === 0 && stateTime.second === 0) stopCounter();
    else
      setTimeout(() => {
        setTime((stateTime) => {
          if (stateTime.second < 60 && stateTime.second > 0)
            return { ...stateTime, second: stateTime.second - 1 };
          if (stateTime.second === 0)
            return { minute: stateTime.minute - 1, second: 59 };
        });
      }, [993]);
  }, [stateTime, stopCounter]);
  return (
    <p className="info2">
      <span>0{stateTime.minute}</span>:
      <span>
        {stateTime.second < 10 ? `0${stateTime.second}` : stateTime.second}
      </span>
    </p>
  );
};

export default memo(TimeCounter);
