import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { actGetListCinemaShowTimesApi } from "../../../../redux/actions/actListCinemaShowTimesApi";

export default function ListCinemaSystems({ listCinemaSystem }) {
  const dispatch = useDispatch();
  let defaultCode;
  let checkActive = useRef("");

  useEffect(() => {
    dispatch(actGetListCinemaShowTimesApi(defaultCode));
    checkActive.current = defaultCode;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderCinemaComplex = () => {
    return listCinemaSystem.map((system, index) => {
      if (index === 0) defaultCode = system.maHeThongRap;
      return (
        <li className="nav-item" role="presentation" key={index}>
          <a
            className={index === 0 ? "nav-link active" : "nav-link"}
            id={system.maHeThongRap}
            data-toggle="tab"
            href={`#${system.biDanh}`}
            role="tab"
            aria-controls={system.biDanh}
            aria-selected={index === 0 ? "true" : "false"}
            onClick={() => {
              handleOnclick(system.maHeThongRap);
            }}
          >
            <img src={system.logo} alt="" />
          </a>
        </li>
      );
    });
  };

  const handleOnclick = (code) => {
    if (code === checkActive.current) return;
    dispatch(actGetListCinemaShowTimesApi(code));
    checkActive.current = code;
  };

  return (
    <ul
      className="nav nav-tabs flex-column"
      id="parentListCinemas"
      role="tablist"
    >
      {renderCinemaComplex()}
    </ul>
  );
}
