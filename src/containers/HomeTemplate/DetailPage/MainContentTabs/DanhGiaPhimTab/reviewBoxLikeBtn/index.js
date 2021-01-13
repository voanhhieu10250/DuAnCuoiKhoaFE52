import React, { Fragment, memo, useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import useStyles from "../../../../../../styles";
import { useDispatch } from "react-redux";
import { actChangeMovieReviewData } from "../../../../../../redux/actions/actPutMovieReview";

function ReviewBoxLikeBtn({ item, index }) {
  const [cloneItem, setCloneItem] = useState(item);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cloneItem.liked.length !== item.liked.length)
      console.log("dispatch liked");
    dispatch(actChangeMovieReviewData(cloneItem, index));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloneItem]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderLikeButton = (arrLiked) => {
    const account = JSON.parse(localStorage.getItem("UserAccount"));
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
    const account = JSON.parse(localStorage.getItem("UserAccount"));
    if (!account) handleOpen();
    else {
      const checkAccount = arr.findIndex((item) => item === account.taiKhoan);
      if (checkAccount !== -1) {
        const tempObj = cloneItem;
        tempObj.liked.splice(checkAccount, 1);
        setCloneItem(tempObj);
      } else {
        const tempObj = cloneItem;
        tempObj.liked.push(account.taiKhoan);
        setCloneItem(tempObj);
      }
    }
  };

  return (
    <Fragment>
      <div
        className="wrapIcon"
        onClick={() => handleClickLike(cloneItem.liked)}
      >
        {renderLikeButton(cloneItem.liked)}
        <span className="amountLike">
          <strong>{cloneItem.liked.length}</strong> Thích
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
