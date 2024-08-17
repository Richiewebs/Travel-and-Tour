import React from 'react'

const Map = () => {
  return (
    <div >
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5425233516367!2d-2.0038523!3d5.2984315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdd6e0e44a4c71b%3A0x370f8ff00a9cf057!2sUniversity%20of%20Mines%20and%20Technology!5e0!3m2!1sen!2sgh!4v1692292795675!5m2!1sen!2sgh" 
        width="100%" 
         
        style={{border:0, height:"730px"}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Map