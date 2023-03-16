import React, { useState } from 'react';
import MemesData from './MemesData'
let url;

const Card = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
  });
  const [allmemeImage, setAllMemeImage] = useState(MemesData);

  const getmemeImage = () => {
    const memesArray = allmemeImage.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNum].url;

    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }
  console.log(url);
// onchange 
const handleChange =(event)=>{
      const {name,value}=event.target;
      setMeme(prevMeme=>({
        ...prevMeme,
        [name]:value
      }))
}
  return (
    <div>
      <div action="" className="form">
        <input 
        type="text" 
        className='form--input' 
        placeholder='Top Text' 
        name='topText' 
        value={meme.topText} 
        onChange={handleChange}
        />
        <input 
        type="text" 
        className='form--input' 
        placeholder='Bottom Text' 
        name="bottomText" 
        value={meme.bottomText} 
        onChange={handleChange}
        />
        <button className='form-button' onClick={getmemeImage}>Get a new meme image  😂</button>

        <div className="meme">
          <img src={meme.randomImage} alt="images" className='meme-images' />
          <h2 className="meme--text top" >{meme.topText}</h2>
          <h2 className="meme--text bottom" >{meme.bottomText}</h2>

        </div>
      </div>
    </div>
  )
}

export default Card