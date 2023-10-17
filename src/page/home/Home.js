import React, { useEffect } from "react";
import MultipleRows from "../../component/MutipleRows/MultipleRows";
import { useDispatch, useSelector } from "react-redux";
import {
  getDanhSachPhimAction,
  getDanhSachRapActions,
  getLichChieuTheoHeThongAction,
} from "../../redux/actions/HomeActions/HomeActions";
import HomeMenu from "./HomeMenu/HomeMenu";
import HomeCarousel from "../../templates/hometemplates/layout/homecarousel/HomeCarousel";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDanhSachPhimAction());

    dispatch(getLichChieuTheoHeThongAction());
  }, []);

  const { arrDanhSachPhim, arrDanhSachRap, arrLichChieu } = useSelector(
    (state) => state.HomeReducer
  );

  return (
    <>
      <HomeCarousel />

      <div className="Home mt-5">
        <div className="flex justify-center">
          <button style={{ width: 100, height: 50, border: '1px solid black' }} className="btn btn-success mr-2">Đang chiếu</button>
          <button style={{ width: 100, height: 50, border: '1px solid black' }} className="btn btn-success">Sắp chiếu</button>
        </div>
        <div className="mutipleRow">
          <MultipleRows arrDanhSachPhim={arrDanhSachPhim} />
        </div>
        <div className="Home-menu">
          <HomeMenu arrLichChieu={arrLichChieu} />
        </div>
      </div>
    </>
  );
};

export default Home;
