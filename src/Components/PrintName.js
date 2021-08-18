import React, { useState } from 'react'

const PrintName = () => {

    const [name, setName] = useState(false)

const handleSubmit = e => {
    e.preventDefault()
    setName(true)
}

setTimeout(() => {
    setName(false)
   
  }, 4000);

    return (
        <>
        
            <div className='text-center text-success mt-5'>
            {name && <h1>Gbadamosi Odofin</h1>}
            </div>
            
            <div className='text-center'> 
        <button className='btn btn-success btn-lg' type='button' onClick={handleSubmit}>CLICK ME TO PRINT NAME</button>
        </div>
           
        </>
    )
}

export default PrintName
