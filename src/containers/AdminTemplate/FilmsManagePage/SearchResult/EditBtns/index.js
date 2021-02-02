import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { convertISOtoDate } from "../../../../../functions/exchangeDateString";
import { useForm } from "../../../../../functions/useForm";
import {
  actDeleteMovieApi,
  actDeleteMovieSuccess,
} from "../../../../../redux/actions/actDeleteMovie";
import { actGetListMoviePerPage } from "../../../../../redux/actions/actGetMoviePerPage";
import {
  actPostUpdateMovie,
  actPostUpdateMovieSuccess,
} from "../../../../../redux/actions/actPostUpdateMovie";
import { actPostUploadImageSuccess } from "../../../../../redux/actions/actPostUploadImage";
import {
  Fade,
  Modal,
  ModalBox,
  ModalCloseBtn,
  ModalTitle,
} from "../../../AdminTemplate.styles";
import * as s from "./editBtns.styles";

const EditBtn = ({ filmData, idx }) => {
  const searchedInfo = JSON.parse(localStorage.getItem("filmsearch"));
  const dispatch = useDispatch();
  const loadingUpdate = useSelector(
    (state) => state.PostUpdateMovieReducer.loading
  );
  const updateSuccess = useSelector(
    (state) => state.PostUpdateMovieReducer.data
  );
  const updateErr = useSelector((state) => state.PostUpdateMovieReducer.err);
  const updateImgSuccess = useSelector(
    (state) => state.PostUploadImageReducer.data
  );
  const loadingImg = useSelector(
    (state) => state.PostUploadImageReducer.loading
  );
  const errorImg = useSelector((state) => state.PostUploadImageReducer.err);
  const deleteErr = useSelector((state) => state.DeleteMovieReducer.err);
  const deleteSuccess = useSelector((state) => state.DeleteMovieReducer.data);
  const [fileUpload, setFileUpload] = useState(null);
  const [openState, setModelState] = useState(false);

  useEffect(() => {
    if (deleteSuccess) dispatch(actDeleteMovieSuccess(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteSuccess]);

  const [
    { tenPhim, trailer, moTa, ngayKhoiChieu, danhGia },
    setFormState,
    ,
    resetFormState,
  ] = useForm({
    tenPhim: filmData.tenPhim,
    trailer: filmData.trailer,
    moTa: filmData.moTa,
    ngayKhoiChieu: convertISOtoDate(filmData.ngayKhoiChieu),
    danhGia: filmData.danhGia,
  });

  const closeModal = () => {
    setModelState(false);
    resetFormState();
    if (updateSuccess || updateImgSuccess)
      dispatch(actGetListMoviePerPage(searchedInfo));
    dispatch(actPostUpdateMovieSuccess(null));
    dispatch(actPostUploadImageSuccess(null));
  };
  const openModal = () => {
    setModelState(true);
  };

  const handleFile = (e) => {
    let file = e.target.files[0];
    setFileUpload(file);
  };

  const handleSubmitEdit = () => {
    if (loadingUpdate || loadingImg) return;
    if ((updateSuccess && !errorImg && !loadingImg) || updateImgSuccess) {
      closeModal();
      return;
    }
    const data = {
      ...filmData,
      tenPhim,
      trailer,
      moTa,
      ngayKhoiChieu,
      danhGia,
    };
    let file = fileUpload;
    let frm = null;
    if (file) {
      frm = new FormData();
      frm.append("File", file, file.name);
      frm.append("tenphim", tenPhim);
      frm.append("manhom", filmData.maNhom);
      frm.append("maphim", filmData.maPhim);
    }
    dispatch(actPostUpdateMovie(data, frm));
  };

  const handleDeleteFilm = () => {
    let r = window.confirm(`Bạn có chắc là muốn xóa phim này không !`);
    if (!r) return;
    dispatch(actDeleteMovieApi(filmData.maPhim));
  };
  return (
    <Fragment>
      <s.DivBtns>
        <s.FilmBtn bgEven={!(idx % 2 === 0)} onClick={openModal}>
          Sửa
        </s.FilmBtn>
        <s.FilmBtn bgEven={!(idx % 2 === 0)} onClick={handleDeleteFilm}>
          Xóa
        </s.FilmBtn>
      </s.DivBtns>
      <Modal OpenModal={openState}>
        <Fade onClick={closeModal} />
        <ModalBox>
          <ModalCloseBtn onClick={closeModal} />
          <ModalTitle>Edit film: {filmData.maPhim}</ModalTitle>
          <s.Success
            hidden={
              (updateImgSuccess && !updateErr && !errorImg) || updateSuccess
                ? false
                : true
            }
          >
            Upload thành công !
          </s.Success>
          <s.Err hidden={updateErr || errorImg ? false : true}>
            {updateErr?.response.data || errorImg?.response.data}
          </s.Err>
          <s.FormContent>
            <s.Box>
              <s.Label>Tên phim: </s.Label>
              <s.Input
                value={tenPhim}
                onChange={setFormState}
                name="tenPhim"
              ></s.Input>
            </s.Box>
            <s.Box>
              <s.Label>Trailer: </s.Label>
              <s.Input
                value={trailer}
                onChange={setFormState}
                name="trailer"
              ></s.Input>
            </s.Box>
            <s.Box>
              <s.Label>Mô tả: </s.Label>
              <s.Textaria
                value={moTa}
                onChange={setFormState}
                name="moTa"
              ></s.Textaria>
            </s.Box>
            <s.Box>
              <s.Label>Ngày khởi chiếu: </s.Label>
              <s.Input
                value={ngayKhoiChieu}
                onChange={setFormState}
                name="ngayKhoiChieu"
              ></s.Input>
            </s.Box>
            <s.Box>
              <s.Label>Đánh giá: </s.Label>
              <s.Input
                value={danhGia}
                onChange={setFormState}
                name="danhGia"
              ></s.Input>
            </s.Box>
            <s.Box>
              <s.Label>Hình ảnh: </s.Label>
              <input onChange={handleFile} name="file" type="file"></input>
            </s.Box>
          </s.FormContent>
          <s.Button onClick={handleSubmitEdit}>
            {loadingUpdate || loadingImg ? "Loading..." : "Submit"}
          </s.Button>
        </ModalBox>
      </Modal>
      <Modal bgNone OpenModal={deleteErr ? true : false}>
        <Fade
          onClick={() => {
            dispatch(actDeleteMovieSuccess(null));
          }}
        />
        <ModalBox>
          <ModalTitle>Phim đã xếp lịch chiếu không thể xóa</ModalTitle>
          <s.Button
            onClick={() => {
              dispatch(actDeleteMovieSuccess(null));
            }}
          >
            Đã hiểu
          </s.Button>
        </ModalBox>
      </Modal>
    </Fragment>
  );
};

export default EditBtn;
