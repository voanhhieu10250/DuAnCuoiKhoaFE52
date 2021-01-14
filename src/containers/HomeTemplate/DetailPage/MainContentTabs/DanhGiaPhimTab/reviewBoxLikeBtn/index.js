import React, { Fragment, memo, useEffect, useRef, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import useStyles from "../../../../../../styles";
import { useDispatch, useSelector } from "react-redux";
import { actSetLikeOnPost } from "../modules/action";
import {
  actPutMovieReview,
  actPutMovieReviewSuccess,
} from "../../../../../../redux/actions/actPutMovieReview";
import { actGetMovieReview } from "../../../../../../redux/actions/actGetMovieReview";

function ReviewBoxLikeBtn({ index }) {
  const clickLike = useRef(false);
  const listComment = useSelector(
    (state) => state.ReviewFeatureReducer.cloneListComment
  );
  const postSuccessData = useSelector(
    (state) => state.PutMovieReviewReducer.data
  );
  const movieReview = useSelector((state) => state.MovieReviewReducer.data);
  const cloneItem = movieReview.listComment[index].liked;
  const account = JSON.parse(localStorage.getItem("UserAccount"));
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (clickLike.current) {
      dispatch(actPutMovieReview({ listComment }, movieReview.maPhim));
      clickLike.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickLike.current]);

  useEffect(() => {
    if (postSuccessData) {
      dispatch(actPutMovieReviewSuccess(null));
      dispatch(actGetMovieReview(movieReview.maPhim));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postSuccessData]);

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
    clickLike.current = true;
    const checkAccount = arr.findIndex((item) => item === account.taiKhoan);
    if (checkAccount !== -1) {
      arr.splice(checkAccount, 1);
    } else {
      arr.push(account.taiKhoan);
    }
    dispatch(actSetLikeOnPost({ liked: arr, index }));
  };

  return (
    <Fragment>
      <div
        className="wrapIcon"
        onClick={account ? () => handleClickLike(cloneItem) : handleOpen()}
      >
        {renderLikeButton(cloneItem)}
        <span className="amountLike">
          <strong>{cloneItem.length}</strong> Thích
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
              <button className="login" id="modal-description-login">
                <p>
                  <strong>Đăng nhập</strong>
                </p>
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </Fragment>
  );
}

export default memo(ReviewBoxLikeBtn);
