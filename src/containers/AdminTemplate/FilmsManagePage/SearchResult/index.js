import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { convertISOtoDate } from "../../../../functions/exchangeDateString";
import { actDeleteMovieSuccess } from "../../../../redux/actions/actDeleteMovie";
import { actGetListMoviePerPage } from "../../../../redux/actions/actGetMoviePerPage";
import {
  Fade,
  Modal,
  ModalBox,
  ModalCloseBtn,
} from "../../AdminTemplate.styles";
import EditBtn from "./EditBtns";
import * as s from "./SearchResult.styles";
import * as cs from "./EditBtns/editBtns.styles";
import { useForm } from "../../../../functions/useForm";
import {
  actPostNewMovieApi,
  actPostNewMovieSuccess,
} from "../../../../redux/actions/actAddMovieApi";

const SearchResult = () => {
  const dispatch = useDispatch();
  const searchedInfo = JSON.parse(localStorage.getItem("filmsearch"));
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [fileState, setFileState] = useState(null);
  const loadingDelete = useSelector(
    (state) => state.DeleteMovieReducer.loading
  );
  const deleteSuccess = useSelector(
    (state) => state.DeleteMovieReducer.loading
  );
  const deleteFailed = useSelector((state) => state.DeleteMovieReducer.err);
  const loadingFilmDatas = useSelector(
    (state) => state.ListMoviePerPageReducer.loading
  );
  const filmDatas = useSelector((state) => state.ListMoviePerPageReducer.data);
  const errFilmDatas = useSelector(
    (state) => state.ListMoviePerPageReducer.err
  );
  const loadingPost = useSelector((state) => state.PostNewMovieReducer.loading);
  const postSuccess = useSelector((state) => state.PostNewMovieReducer.data);
  const postErr = useSelector((state) => state.PostNewMovieReducer.err);
  const [errorInput, setErrorInput] = useState(false);
  const [
    { maNhom, tenPhim, trailer, moTa, ngayKhoiChieu, danhGia },
    setFormState,
    ,
    resetFormState,
  ] = useForm({
    maNhom: "",
    tenPhim: "",
    trailer: "",
    moTa: "",
    ngayKhoiChieu: "",
    danhGia: "",
  });

  useEffect(() => {
    if (deleteSuccess) {
      dispatch(actGetListMoviePerPage(searchedInfo));
      dispatch(actDeleteMovieSuccess(null));
    }
    if (deleteFailed) {
      setTimeout(() => {
        dispatch(actDeleteMovieSuccess(null));
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingDelete, deleteFailed]);

  const closeModalAdd = () => {
    setOpenModalAdd(false);
    resetFormState();
    dispatch(actPostNewMovieSuccess(null));
    setErrorInput(false);
  };

  const handleFile = (e) => {
    let file = e.target.files[0];
    setFileState(file);
  };

  const renderFilmData = () => {
    if (!filmDatas) return;
    return filmDatas.map((item, index) => (
      <s.Block key={index} bgEven={index % 2 === 0}>
        <s.ImgDiv>
          <s.Img src={item.hinhAnh} alt="hinh anh" />
        </s.ImgDiv>
        <s.DivInfo>
          <s.InfoItem>
            Mã Phim: <s.Span>{item.maPhim}</s.Span>
          </s.InfoItem>
          <s.InfoItem>
            Tên phim: <s.Span>{item.tenPhim}</s.Span>
          </s.InfoItem>
          <s.InfoItem>
            Trailer: <s.Span>{item.trailer}</s.Span>
          </s.InfoItem>
          <s.InfoItem>
            Mô tả: <s.Span>{item.moTa}</s.Span>
          </s.InfoItem>
          <s.InfoItem>
            Ngày khởi chiếu:{" "}
            <s.Span>{convertISOtoDate(item.ngayKhoiChieu)}</s.Span>
          </s.InfoItem>
          <s.InfoItem>
            Đánh giá: <s.Span>{item.danhGia}/10</s.Span>
          </s.InfoItem>
          <s.InfoItem>
            Mã nhóm: <s.Span>{item.maNhom}</s.Span>
          </s.InfoItem>
        </s.DivInfo>
        <EditBtn idx={index} filmData={item} />
      </s.Block>
    ));
  };
  const handleSubmitForm = () => {
    if (postSuccess || postErr) {
      closeModalAdd();
      return;
    }
    if (
      !maNhom ||
      !tenPhim ||
      !trailer ||
      !moTa ||
      !ngayKhoiChieu ||
      !danhGia ||
      !fileState
    ) {
      setErrorInput(true);
      return;
    }
    const data = { maNhom, tenPhim, trailer, moTa, ngayKhoiChieu, danhGia };
    let file = fileState;
    let frm = new FormData();
    frm.append("File", file, file.name);
    frm.append("tenPhim", data.tenPhim);
    frm.append("maNhom", data.maNhom);
    frm.append("trailer", data.trailer);
    frm.append("moTa", data.moTa);
    frm.append("ngayKhoiChieu", data.ngayKhoiChieu);
    frm.append("danhGia", data.danhGia);
    dispatch(actPostNewMovieApi(frm));
    setErrorInput(false);
  };
  const handleClickNextPage = () => {
    if (!searchedInfo || loadingFilmDatas || errFilmDatas || !filmDatas) return;
    searchedInfo.soTrang += 1;
    localStorage.setItem("filmsearch", JSON.stringify(searchedInfo));
    dispatch(actGetListMoviePerPage(searchedInfo));
  };
  const handleClickPrevPage = () => {
    if (!searchedInfo || loadingFilmDatas || errFilmDatas || !filmDatas) return;
    searchedInfo.soTrang -= 1;
    localStorage.setItem("filmsearch", JSON.stringify(searchedInfo));
    dispatch(actGetListMoviePerPage(searchedInfo));
  };
  return (
    <Fragment>
      <h3
        style={{ color: "gray", marginTop: "10px" }}
        hidden={!deleteFailed ? true : false}
      >
        Phim đã xếp lịch chiếu không thể xóa.
      </h3>
      <s.BtnContainer>
        <div>
          <s.FeatButton
            disabled={searchedInfo?.soTrang === 1 ? true : false}
            color="#91dcd2a3"
            onClick={handleClickPrevPage}
          >
            Prev page
          </s.FeatButton>
          <s.FeatButton
            disabled={filmDatas?.length < 10 ? true : false}
            color="#91dcd2a3"
            m="0 10px"
            onClick={handleClickNextPage}
          >
            Next page
          </s.FeatButton>
        </div>
        <s.FeatButton onClick={() => setOpenModalAdd(true)}>
          Thêm phim
        </s.FeatButton>
      </s.BtnContainer>
      <s.Container>
        {renderFilmData()}
        <s.UnfoundedFilm
          hidden={!errFilmDatas && filmDatas?.length === 0 ? false : true}
        >
          Rất tiếc phim bạn tìm kiếm không tồn tại.
          <br /> Vui lòng thử mã nhóm khác hoặc phim khác.
        </s.UnfoundedFilm>
        <s.UnfoundedFilm hidden={errFilmDatas ? false : true}>
          {errFilmDatas?.response.data}
        </s.UnfoundedFilm>
        <s.UnfoundedFilm hidden={!loadingFilmDatas || !loadingDelete}>
          Loading ...
        </s.UnfoundedFilm>
      </s.Container>
      <Modal OpenModal={openModalAdd}>
        <Fade onClick={closeModalAdd} />
        <ModalBox>
          <ModalCloseBtn onClick={closeModalAdd} />
          <h2 style={{ fontWeight: "bold", color: "GrayText" }}>Thêm phim</h2>
          <cs.Success hidden={!postSuccess ? true : false}>
            Upload thành công !
          </cs.Success>
          <cs.Err hidden={postErr ? false : true}>
            {postErr?.response.data}
          </cs.Err>
          <cs.Err hidden={!errorInput}>Vui lòng nhập đầy đủ thông tin.</cs.Err>
          <cs.FormContent>
            <cs.Box>
              <cs.Label>Mã nhóm: </cs.Label>
              <cs.Input
                value={maNhom}
                onChange={setFormState}
                name="maNhom"
                placeholder="VD: GP01"
              ></cs.Input>
            </cs.Box>
            <cs.Box>
              <cs.Label>Tên phim: </cs.Label>
              <cs.Input
                value={tenPhim}
                onChange={setFormState}
                name="tenPhim"
                placeholder="VD: Avenger: Endgame"
              ></cs.Input>
            </cs.Box>
            <cs.Box>
              <cs.Label>Trailer: </cs.Label>
              <cs.Input
                value={trailer}
                onChange={setFormState}
                name="trailer"
                placeholder="VD: https://www.youtube.com/3t9pWWTWJLs"
              ></cs.Input>
            </cs.Box>
            <cs.Box>
              <cs.Label>Mô tả: </cs.Label>
              <cs.Textaria
                value={moTa}
                onChange={setFormState}
                name="moTa"
                placeholder="VD: Là phim điện ảnh siêu anh hùng..."
              ></cs.Textaria>
            </cs.Box>
            <cs.Box>
              <cs.Label>Ngày khởi chiếu: </cs.Label>
              <cs.Input
                value={ngayKhoiChieu}
                onChange={setFormState}
                name="ngayKhoiChieu"
                placeholder="VD: dd/MM/yyyy"
              ></cs.Input>
            </cs.Box>
            <cs.Box>
              <cs.Label>Đánh giá: </cs.Label>
              <cs.Input
                value={danhGia}
                onChange={setFormState}
                name="danhGia"
                placeholder="VD: 10"
              ></cs.Input>
            </cs.Box>
            <cs.Box>
              <cs.Label>Hình ảnh: </cs.Label>
              <input onChange={handleFile} name="file" type="file"></input>
            </cs.Box>
          </cs.FormContent>
          <cs.Button
            onClick={handleSubmitForm}
            disabled={loadingPost ? true : false}
          >
            {loadingPost && !postErr
              ? "Loading..."
              : `${postErr ? "Thử lại sau" : "Submit"}`}
          </cs.Button>
        </ModalBox>
      </Modal>
    </Fragment>
  );
};

export default SearchResult;
