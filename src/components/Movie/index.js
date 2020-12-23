import React, { memo } from "react";
import useStyles from "../../styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

function Movie(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { hinhAnh, tenPhim, danhGia, maPhim, trailer } = props.item;

  const renderMovieRanking = () => {
    let listStar = [];
    let starAmount = danhGia / 2;
    let halfStar = starAmount - Math.trunc(starAmount);
    if (halfStar > 0) {
      for (let index = 0; index < starAmount - halfStar; index++) {
        listStar.push(<img src="./img/star1.png" key={index} alt="" />);
        if (index === starAmount - halfStar - 1) {
          listStar.push(<img src="./img/star1.2.png" key={index + 1} alt="" />);
        }
      }
    } else {
      while (starAmount > 0) {
        listStar.push(<img src="./img/star1.png" key={starAmount} alt="" />);
        starAmount--;
      }
    }
    return listStar;
  };

  return (
    <div className="objects">
      <div className="object_item">
        <img
          className="filmImg"
          src={hinhAnh}
          style={{ width: "215px", height: "318px" }}
          alt=""
        />
        <div className="film_Info">
          <button className="btnPlay" type="button" onClick={handleOpen}>
            <img src="./img/play-video.png" alt="" />
          </button>
          <Modal
            disableScrollLock
            aria-labelledby={`modal-title-${maPhim}`}
            aria-describedby={`modal-description-${maPhim}`}
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
                <div id={`modal-title-${maPhim}`} />
                <button
                  className="btnClose"
                  type="button"
                  onClick={handleClose}
                >
                  <img src="./img/icons/close.png" alt="" />
                </button>
                <iframe
                  title={`modal-${maPhim}`}
                  id={`modal-description-${maPhim}`}
                  width="100%"
                  height="100%"
                  src={trailer}
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Fade>
          </Modal>
        </div>
        <div className="filmScore">
          <p className="m-0">{danhGia}</p>
          <p className="smallStar">{renderMovieRanking()}</p>
        </div>
      </div>
      <div className="object_item2">
        <p className="filmTitle">
          <span className="spanRed">C18</span>
          {tenPhim} - (C18)
        </p>
        <p className="filmLength">100 phút</p>
        <button className="btnMuaVe">Mua Vé</button>
      </div>
    </div>
  );
}

export default memo(Movie);
