import axios from "axios";


export const getLayDanhSachPhongVe = (maLichChieu) => {
    return axios.get(
        `https://movieapi.cyberlearn.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    )
}