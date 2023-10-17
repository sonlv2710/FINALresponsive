import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeTemplates from './templates/hometemplates/HomeTemplates'
import News from './page/news/News'
import Home from './page/home/Home'
import Contact from './page/contact/Contact'
import Details from './page/details/Details'
import Login from './templates/AuthTemplate/layout/Login'
import Register from './templates/AuthTemplate/layout/Register/Register'
import AuthTemplate from './templates/AuthTemplate/AuthTemplate'
import CheckOutTemplate from './templates/CheckOutTemplate/CheckOutTemplate'
import Checkout from './templates/CheckOutTemplate/layout/Checkout'
import FilmNews from './page/news/NewsMenu/FilmNews/FilmNews'
import Review from './page/news/NewsMenu/Review/Review'
import Discount from './page/news/NewsMenu/Discount/Discount'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeTemplates />}>
        <Route element={<Home />} index />

        <Route path='/News' element={<News />}>
          <Route element={<FilmNews />} index />
          <Route path='review' element={<Review />} />
          <Route path='discount' element={<Discount />} />
        </Route>

        <Route path='/Contact' element={<Contact />} />
        <Route path='/detail/:maPhim' element={<Details />} />
      </Route>

      <Route path='/auth' element={<AuthTemplate />}>
        <Route path='login' element={<Login />} />
        <Route path='Register' element={<Register />} />
      </Route>

      <Route path='/datve' element={<CheckOutTemplate />} >
        <Route path=':id' element={<Checkout />} />
      </Route>
    </Routes>

  )
}

export default App