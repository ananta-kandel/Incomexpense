import React from 'react'
import Layout from '../components/Layout/Layout'
import img from '../image/background.png'
import Aboutus from './Aboutus'
function MainPage() {
  return (
    <Layout>
      <div className="bg-currency object-cover shadow-2xl flex bg-blend-darken flex-col justify-center items-center " >
        <div className='m-[4rem] text-[4rem] bg-[#243c5a]  p-[2rem] opacity-[.88]  text-white md:text-[4rem] rounded-lg'>
        <p className=''><span className='text-[red] text-[5rem]'>M</span>anage Your Daily </p>
        <p><span className='text-[red] text-[5rem]'>T </span>ransaction</p>
        <p><span className='text-[red] text-[5rem]'>W</span>ith us</p>
        </div>
      </div>
      <Aboutus/>
    </Layout>
  )
}

export default MainPage