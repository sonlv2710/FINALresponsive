import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getLayDanhSachPhongVeAction } from '../../../redux/actions/QuanLyDatVeAction/QuanLyDatVeAction';
import contentStyle from './CheckOut.module.css'


const Checkout = () => {
    const param = useParams();
    const { id } = param;
    // console.log(id);
    const dispatch = useDispatch();

    const { thongTinPhongVe } = useSelector((state) => state.QuanLyDatVeReducer);
    const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
    const { danhSachGheDangDat } = useSelector((state) => state.QuanLyDatVeReducer)
    // console.log(">>>>>> ", userLogin)
    // console.log("thongtindatve", thongTinPhongVe)
    const { thongTinPhim, danhSachGhe } = thongTinPhongVe;
    useEffect(() => {
        dispatch(getLayDanhSachPhongVeAction(id))
    }, [])
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-8' style={{ width: '90%', margin: '0 auto' }}>
                <div className='text-center'>MAN HINH</div>
                <div className='listGhe mt-2 text-center '>
                    {
                        danhSachGhe?.map((item, index) => {
                            let classGheThuong = "";
                            let classGheVip = "";
                            let classGheDaDat = "";
                            let gheMinhDaDat = "";
                            if (item.loaiGhe === 'Thuong') {
                                classGheThuong = contentStyle['gheThuong']
                            }
                            if (item.loaiGhe === 'Vip') {
                                classGheVip = contentStyle['gheVip']
                            }
                            if (item.daDat === true) {
                                classGheDaDat = contentStyle['gheDaDat']
                            }
                            let find =
                                danhSachGheDangDat?.findIndex((ghe) => ghe.maGhe === item.maGhe)
                            if (find !== -1) {
                                gheMinhDaDat = contentStyle['gheMinhDaDat']
                            }
                            return (
                                <>
                                    <button
                                        disabled={item.daDat}
                                        onClick={() => {
                                            dispatch({
                                                type: "CHON_GHE",
                                                ghe: item
                                            })
                                        }}
                                        key={index}
                                        className={`bg-green-500 text-center m-2 ${classGheThuong} ${classGheVip} ${classGheDaDat} ${gheMinhDaDat}`}
                                        style={{ width: 35, height: 35, display: 'inline-block' }}
                                    >
                                        {item.tenGhe}
                                    </button>
                                    {(index + 1) % 16 === 0 ? <br /> : ''}
                                </>
                            )
                        })
                    }
                </div>
            </div>

            <div className='col-span-4'>
                <div className='border-b-2 border-green-400'>
                    {danhSachGheDangDat.reduce((total, item, index) => {
                        return (total += item.giaVe)
                    }, 0).toLocaleString()}
                    VND
                </div>
                <div className='inFo-Film border-b-2 border-green-400'>
                    <div>{thongTinPhim?.tenPhim}</div>
                    <div>{thongTinPhim?.tenCumRap}</div>
                    <div>
                        {thongTinPhim?.ngayChieu}-{thongTinPhim?.tenRap}
                    </div>
                </div>
                <div className='flex justify-between border-b-2 border-green-400'>
                    <div>GHE:
                        {danhSachGheDangDat.map((item, index) => {
                            return <span>
                                {`[${item.tenGhe}]`}
                            </span>
                        })}
                    </div>
                    <div className='mr-3'>
                        {danhSachGheDangDat.reduce((total, item, index) => {
                            return (total += item.giaVe)
                        }, 0).toLocaleString()}
                        VND
                    </div>
                </div>
                <div>
                    Name : {userLogin.hoTen}
                </div>
                <div>
                    Email : {userLogin.email}
                </div>
                <div className='border-b-2 border-green-400'>
                    SDT : {userLogin.soDT}
                </div>
                <div className='text-center border-solid bg-green-600 mt-2'>
                    <button

                    >
                        DAT VE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Checkout