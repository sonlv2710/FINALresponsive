import { getLayDanhSachPhongVe } from "../../services/QuanlyDatVeServices/QuanLyDatVeServices"

export const getLayDanhSachPhongVeAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const res = await getLayDanhSachPhongVe(maLichChieu);
            // console.log("danhsachdatve", res)
            if (res && res.data.statusCode === 200) {
                dispatch({
                    type: "LAY_THONG_TIN_PHONG_VE",
                    thongTinPhongVe: res.data.content,
                })
            } else {
                console.log("loi", res);
            }
        } catch (error) {
            console.log("ERORR", error)
        }
    }
}