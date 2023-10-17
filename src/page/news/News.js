import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './News.css'



const News = () => {
    return (
        <div
            className='grid grid-cols-12'
            style={{
                position: 'absolute',
                top: 100,
                width: '100%',
                height: 360,
                margin: ' 0 auto'
            }}
        >
            <div

                className="flex justify-center md:gap-10  col-span-12">
                <div className='mobie-phone'>
                    <NavLink to='' >ĐIỆN ẢNH 24H</NavLink>
                </div>
                <div className='mobie-phone'>
                    <NavLink to='review' >REVIEW</NavLink>
                </div>
                <div className='mobie-phone'>
                    <NavLink to='discount' >KHUYẾN MÃI</NavLink>
                </div>
            </div>
            <div
                className="gap-10 col-start-3 col-span-8"
            >
                {<Outlet />}
            </div>
        </div>
    )
}

export default News