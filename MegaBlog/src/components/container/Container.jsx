import React from 'react'

export default function Container({classname,...props}) {
  return (
    <div className={` w-full h-[679px] max-ml:h-[650px] ${classname}`} {...props} >
      
    </div>
  )
}