import React, { Fragment, memo, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import useStyles from "../../../../../../styles";
import { useDispatch, useSelector } from "react-redux";
import { actPutMovieReview } from "../../../../../../redux/actions/actPutMovieReview";
import { Link } from "react-router-dom";

function ReviewBoxLikeBtn({ index, liked, reviewData }) {
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
    if (!account)
      return (
        <img className="postLikeCmt" src="../../../../img/like.png" alt="" />
      );
    const checkAccount = arrLiked.find((item) => item === account.taiKhoan);
    return checkAccount ? (
      <img className="postLikeCmt" src="../../../../img/like_red.png" alt="" />
    ) : (
      <img className="postLikeCmt" src="../../../../img/like.png" alt="" />
    );
  };

  const handleClickLike = (arr) => {
    if (loadingPutReview) return;
    const checkAccount = arr.findIndex((item) => item === account.taiKhoan);
    if (checkAccount !== -1) {
      arr.splice(checkAccount, 1);
    } else {
      arr.push(account.taiKhoan);
    }
    const { listComment } = reviewData;
    listComment[index].liked = arr;
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
              <img src="../../img/xController.png" alt="" />
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
