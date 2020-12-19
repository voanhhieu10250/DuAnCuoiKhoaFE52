const locationList = [
  "Hồ Chí Minh",
  "Hà Nội",
  "Đà Nẵng",
  "Hải Phòng",
  "Biên Hòa",
  "Nha Trang",
  "Bình Dương",
  "Phan Thiết",
  "Hạ Long",
  "Cần Thơ",
  "Vũng Tàu",
  "Quy Nhơn",
  "Huế",
  "An Giang",
  "Bắc Giang",
  "Bắc Kạn",
  "Bạc Liêu",
  "Bắc Ninh",
  "Bến Tre",
  "Bình Định",
  "Bình Phước",
  "Bình Thuận",
  "Cà Mau",
  "Cao Bằng",
];

const carouselImages = {
  banner_1:
    "./img/gia-dinh-chan-to-phieu-luu-ky-bigfoot-family-p-16061896575573.png",
  banner_2: "./img/nghe-sieu-kho-16077632925121.jpg",
  banner_3: "./img/tenet-15984144207145.png",
  banner_4: "./img/vi-sao-dua-ban-toi-jungle-beat-p-15994654710579.png",
  banner_5: "./img/bhd-star-59k-ve-ca-tuan-16078613140387.png",
};

const tabNewsData = [
  {
    pos_1: {
      image: "./img/tab-1-pic1.png",
      title:
        "[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng",
      content:
        "Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”, và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ Ante",
    },
    pos_2: {
      image: "./img/tab-1-pic2.png",
      title:
        "Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch",
      content:
        "Vượt mặt Peninsula, Ác Quỷ Đối Đầu trở thành phim ăn khách nhất mùa hè 2020 tại Hàn Quốc. Chỉ sau 12 ngày, Ác Quỷ Đối Đầu chạm điểm hoà vốn với 3.5 triệu lượt xem. Ác Quỷ Đối Đầu giữ vững vị trí top 1 doanh thu 2 tuần liên tiếp tại quê nhà Hàn Quốc",
    },
    pos_3: {
      image: "./img/tab-1-big1.png",
      title:
        "Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan",
      content:
        "Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ chất lượng.",
    },
    pos_4: {
      image: "./img/tab-1-big2.png",
      title:
        "Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn",
      content:
        "Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn 4.68 triệu vé, hai tên tuổi lão làng trong làng điện ảnh Hàn Quốc mới tiếp tục tái hợp trong Truy Cùng Giết Tận – một bộ phim hành động siêu “nặng đô”.",
    },
    pos_5: {
      line_1: {
        img: "./img/tab-1-sub1.png",
        title:
          "6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood",
      },
      line_2: {
        img: "./img/tab-1-sub2.png",
        title: "Gái Già Lắm Chiêu V – Những cuộc đời vương giả",
      },
      line_3: {
        img: "./img/tab-1-sub3.png",
        title:
          "Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm Chiêu",
      },
      line_4: {
        img: "./img/tab-1-sub4.png",
        title:
          "5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ Pinocchio",
      },
    },
  },
  {
    pos_1: {
      image: "./img/tab-2-big1.png",
      title:
        "[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng",
      content:
        "Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”, và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ Ante",
    },
    pos_2: {
      image: "./img/tab-2-big2.png",
      title:
        "Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch",
      content:
        "Vượt mặt Peninsula, Ác Quỷ Đối Đầu trở thành phim ăn khách nhất mùa hè 2020 tại Hàn Quốc. Chỉ sau 12 ngày, Ác Quỷ Đối Đầu chạm điểm hoà vốn với 3.5 triệu lượt xem. Ác Quỷ Đối Đầu giữ vững vị trí top 1 doanh thu 2 tuần liên tiếp tại quê nhà Hàn Quốc",
    },
    pos_3: {
      image: "./img/tab-2-big3.png",
      title:
        "Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan",
      content:
        "Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ chất lượng.",
    },
    pos_4: {
      image: "./img/tab-2-big4.png",
      title:
        "Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn",
      content:
        "Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn 4.68 triệu vé, hai tên tuổi lão làng trong làng điện ảnh Hàn Quốc mới tiếp tục tái hợp trong Truy Cùng Giết Tận – một bộ phim hành động siêu “nặng đô”.",
    },
    pos_5: {
      line_1: {
        img: "./img/tab-2-sub1.png",
        title:
          "6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood",
      },
      line_2: {
        img: "./img/tab-2-sub2.jpg",
        title: "Gái Già Lắm Chiêu V – Những cuộc đời vương giả",
      },
      line_3: {
        img: "./img/tab-2-sub3.jpg",
        title:
          "Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm Chiêu",
      },
      line_4: {
        img: "./img/tab-2-sub4.jpg",
        title:
          "5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ Pinocchio",
      },
    },
  },
  {
    pos_1: {
      image: "./img/tab-3-big1.jpg",
      title:
        "[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng",
      content:
        "Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”, và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ Ante",
    },
    pos_2: {
      image: "./img/tab-3-big2.png",
      title:
        "Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch",
      content:
        "Vượt mặt Peninsula, Ác Quỷ Đối Đầu trở thành phim ăn khách nhất mùa hè 2020 tại Hàn Quốc. Chỉ sau 12 ngày, Ác Quỷ Đối Đầu chạm điểm hoà vốn với 3.5 triệu lượt xem. Ác Quỷ Đối Đầu giữ vững vị trí top 1 doanh thu 2 tuần liên tiếp tại quê nhà Hàn Quốc",
    },
    pos_3: {
      image: "./img/tab-3-big3.jpg",
      title:
        "Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan",
      content:
        "Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ chất lượng.",
    },
    pos_4: {
      image: "./img/tab-3-big4.jpg",
      title:
        "Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn",
      content:
        "Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn 4.68 triệu vé, hai tên tuổi lão làng trong làng điện ảnh Hàn Quốc mới tiếp tục tái hợp trong Truy Cùng Giết Tận – một bộ phim hành động siêu “nặng đô”.",
    },
    pos_5: {
      line_1: {
        img: "./img/tab-3-sub1.jpg",
        title:
          "6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood",
      },
      line_2: {
        img: "./img/tab-3-sub2.jpg",
        title: "Gái Già Lắm Chiêu V – Những cuộc đời vương giả",
      },
      line_3: {
        img: "./img/tab-3-sub3.jpg",
        title:
          "Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm Chiêu",
      },
      line_4: {
        img: "./img/tab-3-sub4.jpg",
        title:
          "5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ Pinocchio",
      },
    },
  },
];

const appBlockCarouselImgs = [
  "./img/slide1.jpg",
  "./img/slide2.jpg",
  "./img/slide3.jpg",
  "./img/slide4.jpg",
  "./img/slide5.jpg",
  "./img/slide6.jpg",
  "./img/slide7.jpg",
  "./img/slide8.jpg",
  "./img/slide9.jpg",
  "./img/slide10.jpg",
  "./img/slide11.jpg",
  "./img/slide12.jpg",
  "./img/slide13.jpg",
  "./img/slide14.jpg",
  "./img/slide15.jpg",
  "./img/slide16.jpg",
];
export { tabNewsData, carouselImages, appBlockCarouselImgs, locationList };
