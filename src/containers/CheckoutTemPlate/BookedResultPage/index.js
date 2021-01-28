import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Loader from "../../../components/Loader";
import qrCode from "../../../img/icons/qr_img.png";

const BookedResult = () => {
  const postLoading = useSelector(
    (state) => state.PostBookedSeatsReducer.loading
  );
  const postStatus = useSelector((state) => state.PostBookedSeatsReducer.data);
  const account = JSON.parse(localStorage.getItem("UserAccount"));
  const bookedTicket = JSON.parse(localStorage.getItem("ticket"));
  const cinemaLogo = localStorage.getItem("cinema");

  useEffect(() => {
    return () => {
      localStorage.removeItem("cinema");
      localStorage.removeItem("ticket");
    };
  }, []);

  if (!bookedTicket || !cinemaLogo || !account || (!postStatus && !postLoading))
    return <Redirect to="/" />;
  if (postLoading) return <Loader />;

  return (
    <div id="successCheckout">
      <div className="contentFull">
        <div className="title">Chúc bạn xem phim vui vẻ</div>
        <div className="mobilePoster">
          <div
            className="styleBlur"
            style={{
              backgroundImage: `url(${bookedTicket.thongTinPhim.hinhAnh})`,
            }}
          >
            <div
              className="styleGradient"
              style={{
                background: "linear-gradient(to top,#fff,transparent 100%)",
              }}
            />
          </div>
        </div>
        <div className="ticketInfo">
          <div className="infomationTicket">
            <div className="filmname">
              <span className="spanRed">C16</span>
              {bookedTicket.thongTinPhim.tenPhim}
            </div>
            <div className="addressTicket">
              <div className="contentCinema">
                <p className="cinema">{bookedTicket.thongTinPhim.tenCumRap}</p>
                <p className="address">{bookedTicket.thongTinPhim.diaChi}</p>
              </div>
              <div className="logoCinema">
                <img src={cinemaLogo} alt="poster" width={40} />
              </div>
            </div>
            <div className="dateTicket">
              <div className="row mx-0">
                <div className="col-sm-5 col-5 datetickettitle">Ngày</div>
                <div className="col-sm-4 col-4 datetickettitle">Giờ</div>
                <div className="col-sm-3 col-3 datetickettitle">Rạp</div>
              </div>
              <div className="row mx-0">
                <div className="col-sm-5 col-5 dateticketcontent">
                  {bookedTicket.thongTinPhim.ngayChieu}
                </div>
                <div className="col-sm-4 col-4 dateticketcontent">
                  {bookedTicket.thongTinPhim.gioChieu}
                </div>
                <div className="col-sm-3 col-3 dateticketcontent">
                  {bookedTicket.thongTinPhim.tenRap}
                </div>
              </div>
            </div>
            <div className="chairTicket">
              <div className="chairtickettitle">SỐ GHẾ</div>
              <div className="chairticketcontent">
                {bookedTicket.listTicket}
              </div>
            </div>
          </div>
          <div className="divide">
            <div className="halfcircleleft" />
            <div className="halfcircleright" />
          </div>
          <div className="codecart">
            <div className="leftcodecart">
              <img className="codeqr" src={qrCode} alt="codeqr" />
            </div>
            <div className="rightcodecart">
              <div className="titlecode">Mã vé</div>
              <div className="contentcode">{bookedTicket.maVe}</div>
              <div className="notecode">
                *VÉ ĐÃ MUA
                <br />
                KHÔNG THỂ ĐỔI TRẢ
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        <div className="space" />
        <Link to="/" style={{ display: "block" }} className="homeBtn">
          Về Trang Chủ
        </Link>
        <div className="contact">
          <div className="note">
            Xin lưu ý, bạn không thể hủy hoặc thay đổi suất chiếu cho vé đã mua.
          </div>
          <div className="hot">
            <div className="hotline">
              <p className="hotlineTitle">HOTLINE</p>
              <p className="costcall">Phí cuộc gọi 1000VND/phút</p>
            </div>
            <div className="phone">1900 545 436</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedResult;
