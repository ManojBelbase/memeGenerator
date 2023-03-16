import React from 'react'

const ThingAdd = () => {
   const [newItem,setnewItem] = React.useState(['Thing 1','Thing 2']);
const AddItem=()=>{
setnewItem((preState)=>{
    return [...preState,`Thing ${preState.length + 1 }`]
})
}
  return (
    <div>
      <button onClick={AddItem}>Add item</button>
      <p>{newItem}<br/></p>
    </div>
  )
}

export default ThingAdd
