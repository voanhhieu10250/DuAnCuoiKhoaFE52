import { swaggerInstance } from "../../Axios";
import {
  LIST_MOVIE_PER_PAGE_FAILED,
  LIST_MOVIE_PER_PAGE_REQUEST,
  LIST_MOVIE_PER_PAGE_SUCCESS,
} from "../constants";

export const actGetListMoviePerPage = ({
  maNhom,
  tenPhim,
  soTrang = "1",
  soPhanTuTrenTrang = "10",
  tuNgay,
  denNgay,
}) => async (dispatch) => {
  try {
    dispatch(actGetListMoviePerPageRequest());
    const res = await swaggerInstance({
      url: `/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=${
        !maNhom ? "GP01" : maNhom
      }${
        !tenPhim ? "" : `&tenPhim=${tenPhim}`
      }&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}&tuNgay=${
        !tuNgay ? "01%2F01%2F2000" : tuNgay
      }&denNgay=${!denNgay ? "24%2F12%2F2300" : denNgay}`,
      method: "GET",
    });
    dispatch(actGetListMoviePerPageSuccess(res.data));
  } catch (error) {
    dispatch(actGetListMoviePerPageFailed(error));
  }
};

export const actGetListMoviePerPageRequest = () => ({
  type: LIST_MOVIE_PER_PAGE_REQUEST,
});
export const actGetListMoviePerPageSuccess = (payload) => ({
  type: LIST_MOVIE_PER_PAGE_SUCCESS,
  payload,
});
export const actGetListMoviePerPageFailed = (payload) => ({
  type: LIST_MOVIE_PER_PAGE_FAILED,
  payload,
});
