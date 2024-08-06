import React from 'react'
import house from '../assets/house.jpg'
import App from '../components/Accordion'

const Service = () => {
  return (
    <div className='flex flex-col w-full p-10 pt-24 ' class='service'>

        
        <div className='m-auto my-10 w-11/12 bg-white'>
        <div className='flex w-full pt-14 '>
        <div className='w-1/2 px-5'>
            <div className='w-11/12  ml-5 py-10 p-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300'>
                <img src={house} alt="" srcset="" />
            </div>
        </div >

        <div className='w-1/2 p-5 text-slate-950 bg-white '>
        <h1 className='text-center text-slate-900 text-3xl font-bold'>Services</h1>
        <div className='mt-7'>
        <App></App>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Service
