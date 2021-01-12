import React, { Fragment, memo, useRef, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import useStyles from "../../../../../../styles";
import { Link } from "react-router-dom";

function InputReviewSection() {
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
    setMissingPost(false);
    setOpenComment(false);
  };
  console.log("chay ne");
  const handleClickPost = () => {
    if (!postContent.current.value && missingPost === false) {
      setMissingPost(true);
    }
    if (postContent.current.value) {
      // dipatch bài post mới lên server

      closeCommentBox();
    }
  };
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
            <div className="core">
              <p>5.0</p>
            </div>
            <div className="starSelect">
              <div className="starBackList">
                <img src="../../../../../../img/starBack.png" alt="" />
                <img src="../../../../../../img/starBack.png" alt="" />
                <img src="../../../../../../img/starBack.png" alt="" />
                <img src="../../../../../../img/starBack.png" alt="" />
                <img src="../../../../../../img/starBack.png" alt="" />
              </div>
              <div
                className="starSelectList"
                style={{ clip: "rect(0 83.75px 32px 0)" }}
              >
                <img src="../../../../../../img/StarSelect.png" alt="" />
                <img src="../../../../../../img/StarSelect.png" alt="" />
                <img src="../../../../../../img/StarSelect.png" alt="" />
                <img src="../../../../../../img/StarSelect.png" alt="" />
                <img src="../../../../../../img/StarSelect.png" alt="" />
              </div>
            </div>
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
              <button
                onClick={handleClickPost}
                className="postBtn"
                id="modal-description-comment"
              >
                ĐĂNG
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </Fragment>
  );
}

export default memo(InputReviewSection);
