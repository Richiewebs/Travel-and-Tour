import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='border-4  hover:w-64 p-6  text-xl rounded-full border-white bg-transparent'>{props.name}</button>
    </div>
  )
}

export default Button
