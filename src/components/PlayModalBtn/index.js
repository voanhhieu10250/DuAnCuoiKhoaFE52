import React, { Fragment } from "react";
import useStyles from "../../styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

export default function PlayModalBtn({ keyId, videoLink }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <button className="btnPlay" type="button" onClick={handleOpen}>
        <img src="../../img/play-video.png" alt="" />
      </button>
      <Modal
        disableScrollLock
        aria-labelledby={`modal-title-${keyId}`}
        aria-describedby={`modal-description-${keyId}`}
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
          <div className={classes.paper}>
            <div id={`modal-title-${keyId}`} />
            <button className="btnClose" type="button" onClick={handleClose}>
              <img src="../../img/icons/close.png" alt="" />
            </button>
            <iframe
              title={`modal-${keyId}`}
              id={`modal-description-${keyId}`}
              width="100%"
              height="100%"
              src={videoLink}
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Fade>
      </Modal>
    </Fragment>
  );
}
