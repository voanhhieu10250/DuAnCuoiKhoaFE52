import React, { Fragment, memo } from "react";
import { carouselItems } from "../../data";
import useStyles from "../../styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

function CarouselComponent({ Component }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState({ status: false, id: "" });
  const handleOpen = (index) => {
    setOpen({
      status: true,
      id: index,
    });
  };

  const handleClose = () => {
    setOpen({
      status: false,
      id: "",
    });
  };

  const renderItemDetail = (listData) => {
    return listData.map((item, index) => (
      <div
        className={index === 0 ? "carousel-item active" : "carousel-item"}
        key={index}
      >
        <img src={item.banner} className="d-block w-100 trailerImg" alt="" />
        {item.playBtn ? renderModal(index, item.trailer) : ""}
      </div>
    ));
  };

  const renderModal = (index, trailer) => {
    return (
      <Fragment>
        <button
          className="btnPlay"
          type="button"
          onClick={() => handleOpen(index)}
          key={index}
        >
          <img src="./img/play-video.png" alt="" />
        </button>
        <Modal
          disableScrollLock
          aria-labelledby={`modal-title-${index}`}
          aria-describedby={`modal-description-${index}`}
          className={classes.modal}
          open={index === open.id ? open.status : false}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={index === open.id ? open.status : false}>
            <div className={classes.paper}>
              <div id={`modal-title-${index}`} />
              <button className="btnClose" type="button" onClick={handleClose}>
                <img src="./img/icons/close.png" alt="" />
              </button>
              <iframe
                title={`modal-${index}`}
                id={`modal-description-${index}`}
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
      </Fragment>
    );
  };

  const renderListCarouselItem = (listData) => {
    let tempList = [];
    for (const index in listData) {
      tempList.push(
        <li
          data-target="#filmsCarousel"
          data-slide-to={index}
          className={parseInt(index) === 0 ? "active" : ""}
          key={index}
        />
      );
    }
    return tempList;
  };

  return (
    <div className="wrapperTrailer container-fluid">
      <div id="filmsCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {renderListCarouselItem(carouselItems)}
        </ol>
        <div className="carousel-inner">{renderItemDetail(carouselItems)}</div>
        <a
          className="carousel-control-prev"
          href="#filmsCarousel"
          role="button"
          data-slide="prev"
        >
          <img src="../../img/back-session.png" className="btn_Prev" alt="" />
        </a>
        <a
          className="carousel-control-next"
          href="#filmsCarousel"
          role="button"
          data-slide="next"
        >
          <img src="../../img/next-session.png" className="btn_Next" alt="" />
        </a>
      </div>
      <Component />
    </div>
  );
}

export default memo(CarouselComponent);
