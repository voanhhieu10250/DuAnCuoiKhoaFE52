import React, { memo, useEffect, useRef, useState } from "react";

const TimeCounter = ({ stopCounter }) => {
  const [stateTime, setTime] = useState({ minute: 5, second: 0 });
  const timeout = useRef();

  useEffect(() => {
    if (stateTime.minute === 0 && stateTime.second === 0) stopCounter();
    else {
      timeout.current = setTimeout(() => {
        setTime(() => {
          if (stateTime.second < 60 && stateTime.second > 0)
            return { ...stateTime, second: stateTime.second - 1 };
          if (stateTime.second === 0 && stateTime.minute > 0)
            return { minute: stateTime.minute - 1, second: 59 };
          return stateTime;
        });
      }, [993]);
    }
  }, [stateTime, stopCounter]);

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

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
