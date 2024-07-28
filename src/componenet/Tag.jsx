


import React, { useState, useEffect } from 'react'
import Spinner from './Spinner'
import axios from 'axios';

 const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const Tag = () => {
  const [tag, setTag] = useState('apple');
  const [loading, setLoading] = useState('false')
  const [gif, setGif] = useState('')

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const image = data.data.images.downsized_large.url
    setGif(image);
    setLoading(false);
    const { data } = await axios.get(url);
    console.log(data);
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className='w-1/2 bg-purple-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15]'>
      <h1 className='mt-[15px] text-2xl uppercase font-bold '>random {tag} gif</h1>
      {
 loading ?(<Spinner/>) : (<img src={gif} alt='' width='450'/>) 
     }
      <input className='w-5/12 text-lg py-2 rounded-lg mb-[3px] text-center' onChange={(event) => setTag(event.target.value)} value={tag} />
      <button onClick={() => fetchData()} className='w-5/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] font-bold uppercase'>Generate</button>
    </div>
  )
}

export default Tag
