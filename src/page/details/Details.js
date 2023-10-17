import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getLayDanhSachLichChieuPhimAction } from '../../redux/actions/quanlyrapaction/QuanLyRapAction'
import moment from 'moment'
import { Rate } from 'antd';

const Details = () => {
    const params = useParams();
    const { maPhim } = params;
    // console.log("sokjdaokd", params);
    const { thongTinPhim } = useSelector(state => state.QuanLyRapReducer)
    // console.log('đâsdasdsa', thongTinPhim);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLayDanhSachLichChieuPhimAction(maPhim))
    }, [])

    return (
        <div style={{ paddingTop: "200px", display: 'flex', gap: 600 }}>
            <div className="img">
                <div>
                    < img
                        style={{ width: 400, height: 400 }}
                        src={thongTinPhim?.hinhAnh}
                        alt={thongTinPhim?.tenPhim}
                    />
                </div>
                <div>
                    <b>{thongTinPhim?.tenPhim}</b>
                </div>
                <div>
                    <p>{moment(thongTinPhim?.ngayKhoiChieu).format("DD/MM/YYYY")}</p>
                </div>
            </div>
            <div className='col-span-6'>
                <Rate allowHalf defaultValue={thongTinPhim?.danhGia / 2} />
            </div>
        </div>
    )
}

export default Details