import React, { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import DetailCinemaSystem from "./detailCinemaSystem";
import ListCinemaSystems from "./listCinemaSystems";
import { actGetListCinemaSystemApi } from "../../../../redux/actions/actListCinemaSystemApi";

function CinemaComplex() {
  const listCinemaSystem = useSelector(
    (state) => state.ListCinemaSystemReducer.data
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetListCinemaSystemApi());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (listCinemaSystem !== null)
    return (
      <div className="cinemaBlock">
        <div className="col-12 mainMaxWidth px-0" id="homeCinemaComplex">
          <ListCinemaSystems listCinemaSystem={listCinemaSystem} />
          <DetailCinemaSystem listCinemaSystem={listCinemaSystem} />
        </div>
      </div>
    );
  return <div></div>;
}

export default memo(CinemaComplex);
