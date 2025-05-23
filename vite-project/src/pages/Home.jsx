import React from 'react'
import MainBanner from '../componennts/MainBanner'
import Categories from '../componennts/Categories'
import BestSeller from '../componennts/BestSeller'
import BottomBanner from '../componennts/BottomBanner'
import NewsLetter from '../componennts/NewsLetter'
import Footer from '../componennts/Footer'

const Home = () => {
  return (
    <div className='mt-10'>
        <MainBanner></MainBanner>
        <Categories></Categories>
        <BestSeller></BestSeller>
        <BottomBanner></BottomBanner>
        <NewsLetter></NewsLetter>
    </div>
  )
}

export default Home
