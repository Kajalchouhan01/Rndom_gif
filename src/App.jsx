
import React from 'react'
import Tag from './componenet/Tag'


const App = () => {
  return (
    <div className='w-full h-screen flex flex-col background relative overflow-x-hidden items-center'>
          <h1 className='rounded-lg w-11/12 text-center mt-[60px] 
          px-10 py-4 text-5xl font-bold text-purple-800'>Random GIFS</h1>
          <div className="flex flex-col w-full items-center gap-y-15 mt-[30px]">
                 <Tag/>
          </div>
     </div>
  )
}

export default App