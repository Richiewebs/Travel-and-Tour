import React from 'react'
import Input from '../components/Input'
import Map from '../components/Map'


const Contact = () => {
  return (
    <div className='w-full  bg-gray-100 ' style={{color:'black'}}>
        
        <div className='p-24'>
        <div className='w-full  flex m-auto bg-white shadow rounded-md' class='contact'>
            <div className='w-1/2  ' style={{height: '100%'}}>
                <Map></Map>
            </div>

            <div className=' w-1/2  h-4/5 flex flex-col space-y-10 p-10 font-medium ' style={{color: 'black'}}>
              <h1 className='font-semibold text-2xl text-center'>Get in Touch</h1>
                <Input type='text' placeholder='Name ' name='name'></Input>
                <Input type='email' placeholder='Email' name='email'></Input>
                <textarea placeholder='Message' className='rounded-lg resize-none text-black p-5 h-64 outline-none border-gray-100 border-4'></textarea>
                <button className='p-5 bg-black text-lg text-white rounded-lg'>Send</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact
