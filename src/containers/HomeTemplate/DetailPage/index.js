import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actGetMovieDetailsApi,
  actMovieDetailsSuccess,
} from "../../../redux/actions/actMovieDetailsApi";
import { actGetListCinemaSystemApi } from "../../../redux/actions/actListCinemaSystemApi";
import Loader from "../../../components/Loader";
import { Redirect } from "react-router-dom";
import { actGetListCinemaShowTimesApi } from "../../../redux/actions/actListCinemaShowTimesApi";
import HomeFooter from "../../../components/HomeFooter";

const MainContentTabs = React.lazy(() => import("./MainContentTabs"));
const DetailMainTop = React.lazy(() => import("./DetailMainTop"));

export default function DetailPage(props) {
  const { id } = props.match.params;
  const maPhim = id.slice(0, 4);
  const loading1 = useSelector((state) => state.MovieDetailsReducer.loading);
  const loading2 = useSelector(
    (state) => state.ListCinemaSystemReducer.loading
  );
  const loading3 = useSelector(
    (state) => state.ListCinemaShowTimesReducer.loading
  );
  const movieDetailData = useSelector(
    (state) => state.MovieDetailsReducer.data
  );
  const errState = useSelector((state) => state.MovieDetailsReducer.err);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetMovieDetailsApi(maPhim));
    dispatch(actGetListCinemaShowTimesApi());
    dispatch(actGetListCinemaSystemApi());
    return () => {
      dispatch(actMovieDetailsSuccess(null));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (errState) return <Redirect to="/" />;
  if (loading1 || loading2 || loading3 || !movieDetailData) return <Loader />;

  return (
    <div className="mainContent container-fluid px-0" id="detailPage">
      <Suspense fallback={<Loader />}>
        <DetailMainTop movieDetailData={movieDetailData} />
        <MainContentTabs />
        <HomeFooter />
      </Suspense>
    </div>
  );
}
