import React from 'react'

const Input = (props) => {
  return (
    <div className='mt-10'>
      <input type={props.type} placeholder={props.placeholder} name={props.name} className='w-full text-white p-5 outline-none border-b-2 border-gray-500 bg-gray-700 ' ></input>
    </div>
  )
}

export default Input
