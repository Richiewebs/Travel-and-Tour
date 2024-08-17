import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='border-4  hover:w-64 p-6  text-lg rounded-full border-white bg-white text-gray-900'>{props.name}</button>
    </div>
  )
}

export default Button
