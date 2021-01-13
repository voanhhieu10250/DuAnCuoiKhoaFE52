import React, { Fragment, memo, useEffect, useRef, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import useStyles from "../../../../../../styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SelectStar from "./selectStar";
import {
  actResetPostReviewState,
  actSetContentPostReview,
} from "../modules/action";
import {
  actPutMovieReview,
  actPutMovieReviewSuccess,
} from "../../../../../../redux/actions/actPutMovieReview";
import { actGetMovieReview } from "../../../../../../redux/actions/actGetMovieReview";

function InputReviewSection() {
  const movieDetail = useSelector((state) => state.MovieDetailsReducer.data);
  const movieReview = useSelector((state) => state.MovieReviewReducer.data);
  const listComment = useSelector(
    (state) => state.ReviewFeatureReducer.updatedReviewData
  );
  const stateChanged = useSelector(
    (state) => state.ReviewFeatureReducer.newUpdate
  );
  const postLoading = useSelector(
    (state) => state.PutMovieReviewReducer.loading
  );
  const postSuccessData = useSelector(
    (state) => state.PutMovieReviewReducer.data
  );
  const [missingPost, setMissingPost] = useState(false);
  const postContent = useRef();
  const checkAccount = JSON.parse(localStorage.getItem("UserAccount"));
  const [open, setOpen] = useState(false);
  const [openComment, setOpenComment] = useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const openCommentBox = () => {
    setOpenComment(true);
  };
  const closeCommentBox = () => {
    setOpenComment(false);
    if (missingPost) {
      setMissingPost(false);
    }
    if (postSuccessData && !postLoading) {
      dispatch(actPutMovieReviewSuccess(null));

      // render lại page luôn
      dispatch(actGetMovieReview(movieDetail.maPhim));
    }
  };
  const dispatch = useDispatch();
  console.log("chay ne");

  const handleClickPost = () => {
    if (!postContent.current.value && missingPost === false) {
      setMissingPost(true);
    }
    if (postContent.current.value) {
      // dipatch bài post mới lên server
      dispatch(
        actSetContentPostReview({
          comment: postContent.current.value,
          movieReview,
        })
      );
    }
  };

  useEffect(() => {
    if (listComment.length > 0) {
      dispatch(actPutMovieReview({ listComment }, movieDetail.maPhim));
      dispatch(actResetPostReviewState());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateChanged]);

  useEffect(() => {
    if (postSuccessData && !postLoading) {
      closeCommentBox();
    }
  }, [postSuccessData, postLoading]);

  return (
    <Fragment>
      <div
        className="col-12 inputReviewSection"
        onClick={checkAccount ? openCommentBox : handleOpen}
      >
        <span className="imgReviewer">
          {checkAccount ? (
            <img
              src={`https://i.pravatar.cc/150?u=${checkAccount.taiKhoan}`}
              alt="avatar"
            />
          ) : (
            <img src="../../../../../../img/avatar.png" alt="avatar" />
          )}
        </span>
        <input
          type="text"
          placeholder="Bạn nghĩ gì về phim này?"
          className="inputReview"
          readOnly
        ></input>
        <span className="imgReviewerStar">
          <img src="../../../../../../img/listStar.png" alt="" />
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
              <img src="../../../../img/xController.png" alt="" />
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
      <Modal
        disableScrollLock
        aria-labelledby="modal-comment"
        aria-describedby="modal-description-comment"
        className={classes.modal}
        open={openComment}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openComment}>
          <div className={classes.postPaper}>
            <button
              className="btnCloseLogin"
              type="button"
              onClick={closeCommentBox}
            >
              <img src="../../../../img/xController.png" alt="" />
            </button>
            <SelectStar />
            <div className="mx-0">
              <textarea
                ref={postContent}
                autoFocus
                rows="2"
                className="inputComment"
                placeholder="Nói cho mọi người biết bạn nghĩ gì về phim này..."
              ></textarea>
            </div>
            <div className="errorPost">
              {missingPost ? "Hãy cho TIX biết suy nghĩ của bạn" : ""}
            </div>
            <div className={classes.postBtn}>
              {postLoading ? (
                <button
                  className="postBtn"
                  id="modal-description-comment"
                  disabled
                >
                  Loading...
                </button>
              ) : (
                <button
                  onClick={handleClickPost}
                  className="postBtn"
                  id="modal-description-comment"
                >
                  ĐĂNG
                </button>
              )}
            </div>
          </div>
        </Fade>
      </Modal>
    </Fragment>
  );
}

export default memo(InputReviewSection);
