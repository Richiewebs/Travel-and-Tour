import React from 'react'
import contact2 from '../assets/contact1.jpg'
import Input from '../components/Input'
import map from '../assets/map.png'


const Contact = () => {
  return (
    <div className='w-full  bg-gray-100 ' style={{color:'black'}}>
        <div className='w-full h-11/12  mb-10' style={{width:'100vw'}}>
        <img src={map} alt="" srcset="" style={{height: '100%', width:'100%'}} />
        </div>
        <div className='p-24'>
        <div className='w-full  flex m-auto shadow rounded' class='contact'>
            <div className='w-1/2 '>
                <img src={contact2} alt="" srcset="" style={{height: '100%'}} />
            </div>

            <div className=' w-1/2  h-4/5 flex flex-col space-y-10 p-10 font-medium ' style={{color: 'black'}}>
                <Input type='text' placeholder='Name ' name='name'></Input>
                <Input type='email' placeholder='Email' name='email'></Input>
                <textarea placeholder='Message' className='resize-none text-white bg-gray-700 p-5 h-64 outline-none border-b-2'></textarea>
                <button className='p-5 bg-gray-400 text-lg'>Send</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact
