import React from 'react'

const Input = (props) => {
  return (
    <div className='mt-10'>
      <input type={props.type} placeholder={props.placeholder} name={props.name} className='w-full text-black p-5 outline-none rounded-md border-4 border-gray-100 ' ></input>
    </div>
  )
}

export default Input
