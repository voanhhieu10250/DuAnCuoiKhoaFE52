import React, { Fragment, memo, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import useStyles from "../../../../../../styles";
import { useDispatch, useSelector } from "react-redux";
import { actPutMovieReview } from "../../../../../../redux/actions/actPutMovieReview";
import { Link } from "react-router-dom";
// icons
import xController from "../../../../../../img/icons/xController.png";
import unLikeBtn from "../../../../../../img/icons/like.png";
import likedBtn from "../../../../../../img/icons/like_red.png";

function ReviewBoxLikeBtn({ index, liked, reviewData, setLikeBtnIndex }) {
  const loadingPutReview = useSelector(
    (state) => state.PutMovieReviewReducer.loading
  );
  const account = JSON.parse(localStorage.getItem("UserAccount"));
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderLikeButton = (arrLiked) => {
    if (!account) return <img className="postLikeCmt" src={unLikeBtn} alt="" />;
    const checkAccount = arrLiked.find((item) => item === account.taiKhoan);
    return checkAccount ? (
      <img className="postLikeCmt" src={likedBtn} alt="" />
    ) : (
      <img className="postLikeCmt" src={unLikeBtn} alt="" />
    );
  };

  const handleClickLike = (arr) => {
    if (loadingPutReview)
      return alert("Bạn thao tác nhanh quá! Chậm lại tí đi!");
    const checkAccount = arr.findIndex((item) => item === account.taiKhoan);
    if (checkAccount !== -1) {
      arr.splice(checkAccount, 1);
    } else {
      arr.push(account.taiKhoan);
    }
    const { listComment } = reviewData;
    listComment[index].liked = arr;
    setLikeBtnIndex(index);
    dispatch(actPutMovieReview({ listComment }, reviewData.maPhim));
  };

  return (
    <Fragment>
      <div
        className="wrapIcon"
        onClick={account ? () => handleClickLike(liked) : handleOpen}
      >
        {renderLikeButton(liked)}
        <span className="amountLike">
          <strong>{liked.length}</strong> Thích
        </span>
      </div>
      <Modal
        disableScrollLock
        aria-labelledby="modal-login"
        aria-describedby="modal-description-login"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.loginPaper}>
            <p className="title">Bạn cần phải đăng nhập.</p>
            <button
              className="btnCloseLogin"
              type="button"
              onClick={handleClose}
            >
              <img src={xController} alt="" />
            </button>
            <div className={classes.btnLogin}>
              <Link to="/login" className="login" id="modal-description-login">
                <p>
                  <strong>Đăng nhập</strong>
                </p>
              </Link>
            </div>
          </div>
        </Fade>
      </Modal>
    </Fragment>
  );
}

export default memo(ReviewBoxLikeBtn);
