import React from 'react'

const Test = () => {
    const [isGoingOut,setisGoingOut] = React.useState(true);
    const handle=()=>{
        setisGoingOut(answer=>!answer)
    }
   
    return(
        <>
        <button onClick={handle}>{isGoingOut ?'yes':"no"}</button>
        </>
    )
    
}

export default Test;
