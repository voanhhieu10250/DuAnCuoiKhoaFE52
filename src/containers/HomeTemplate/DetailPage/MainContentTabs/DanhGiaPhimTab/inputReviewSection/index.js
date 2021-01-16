import React, { Fragment, useEffect, useRef, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import useStyles from "../../../../../../styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SelectStar from "./selectStar";
import { actPutMovieReview } from "../../../../../../redux/actions/actPutMovieReview";

function InputReviewSection({ reviewData }) {
  const putLoading = useSelector(
    (state) => state.PutMovieReviewReducer.loading
  );
  const putSuccessData = useSelector(
    (state) => state.PutMovieReviewReducer.data
  );
  const postingNewComment = useRef(false);
  const [rate, setRate] = useState(5);
  const [openComment, setOpenComment] = useState(false);
  const [missingPost, setMissingPost] = useState(false);
  const [open, setOpen] = useState(false);
  const account = JSON.parse(localStorage.getItem("UserAccount"));
  const postContent = useRef();
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      putSuccessData &&
      !putLoading &&
      openComment &&
      postingNewComment.current
    ) {
      closeCommentBox();
      postingNewComment.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [putLoading, putSuccessData, openComment]);

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
    setRate(5);
    if (missingPost) {
      setMissingPost(false);
    }
  };

  const handleClickPost = () => {
    if (!postContent.current.value && !missingPost) {
      // Nếu chưa nhập content mà bấm post thì sẽ hiện thông báo
      setMissingPost(true);
    }
    if (postContent.current.value) {
      const { listComment } = reviewData;
      const time = new Date();
      listComment.push({
        rating: rate,
        comment: postContent.current.value,
        time: time.toISOString(),
        reviewer: account.taiKhoan,
        avatar: `https://i.pravatar.cc/150?u=${account.taiKhoan}`,
        liked: [],
      });
      dispatch(actPutMovieReview({ listComment }, reviewData.maPhim));
      postingNewComment.current = true;
    }
  };

  return (
    <Fragment>
      <div
        className="col-12 inputReviewSection"
        onClick={account ? openCommentBox : handleOpen}
      >
        <span className="imgReviewer">
          {account ? (
            <img
              src={`https://i.pravatar.cc/150?u=${account.taiKhoan}`}
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
              disabled={putLoading ? true : false}
            >
              <img src="../../../../img/xController.png" alt="" />
            </button>
            <SelectStar rate={rate} setRate={setRate} />
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
              {putLoading ? (
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

export default InputReviewSection;
