import React from 'react'
const img ='https://freepngimg.com/thumb/internet_meme/4-2-yao-ming-meme-png-thumb.png'
const Nvabar = () => {
  return (
    <div>
        <nav>
            <div className="leftnav">
                <img src={img} alt="logo" className='imgprop'/>
                <span className='logoname'>Meme Generator</span>
            </div>
            <div className="rightnav">
                <p>React Course - Project 3</p>
            </div>
        </nav>
    </div>
  )
}

export default Nvabar