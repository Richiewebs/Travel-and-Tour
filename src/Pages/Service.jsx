import React from 'react'
import beach from '../assets/house.jpg'
import App from '../components/Accordion'

const Service = () => {
  return (
    <div className='flex flex-col w-full p-10 pt-14 bg-white' class='service'>

        <h1 className='text-center text-slate-900 text-3xl font-bold'>Services</h1>

    
        <div className='flex w-full pt-14 '>
        <div className='w-1/2 '>
            <div className='w-11/12 py-10 p-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300'>
                <img src={beach} alt="" srcset="" />
            </div>
        </div >

        <div className='w-1/2 p-5 text-slate-950 bg-white m-10'>
        <App></App>
        </div>
    </div>
    </div>
  )
}

export default Service
