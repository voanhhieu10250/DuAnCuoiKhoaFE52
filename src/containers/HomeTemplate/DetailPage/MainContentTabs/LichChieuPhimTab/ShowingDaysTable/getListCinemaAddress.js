export const getListCinemaAddress = (cinemasData) => {
  if (!cinemasData) return [];
  const cinemasBox = cinemasData.map((item) => {
    const eachCienma = item.lstCumRap.map((obj) => {
      return { maCumRap: obj.maCumRap, diaChi: obj.diaChi };
    });
    return { maHeThongRap: item.maHeThongRap, cinemas: eachCienma };
  });
  return cinemasBox;
};
