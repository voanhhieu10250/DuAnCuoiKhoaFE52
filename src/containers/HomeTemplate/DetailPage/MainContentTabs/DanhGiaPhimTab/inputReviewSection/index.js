import React, { Fragment, memo, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import useStyles from "../../../../../../styles";

function InputReviewSection() {
  const checkAccount = JSON.parse(localStorage.getItem("UserAccount"));
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <div
        className="col-12 inputReviewSection"
        onClick={checkAccount ? "" : handleOpen}
      >
        <span className="imgReviewer">
          <img src="../../../../../../img/avatar.png" alt="avatar" />
        </span>
        {checkAccount ? (
          <input
            type="text"
            placeholder="Bạn nghĩ gì về phim này?"
            className="inputReview"
          ></input>
        ) : (
          <input
            type="text"
            placeholder="Bạn nghĩ gì về phim này?"
            className="inputReview"
            readOnly
          ></input>
        )}
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

export default memo(InputReviewSection);
