import { getLayDanhSachLichChieuPhim } from "../../services/QuanLyRapServices/QuanLyRapServices"

export const getLayDanhSachLichChieuPhimAction = (maPhim) => {
    return async (dispath) => {
        try {
            const res = await getLayDanhSachLichChieuPhim(maPhim);
            console.log('okokoko', res);
            if (res && res.data.statusCode === 200) {
                dispath({
                    type: "LAY_THONG_TIN_PHIM",
                    thongTinPhim: res.data.content,
                });
            } else {
                console.log(res);
            }
        } catch (error) {
            console.log("ERR", error);
        }
    }
}