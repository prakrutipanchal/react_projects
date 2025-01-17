import React  from "react";
import { useState } from "react";

function BgChanger()
{
  const [color, setColor] = useState("olive");

  return(
    <>
    <div className='w-full h-screen justify-center flex pt-40'>
      <div className='h-28 w-28 bg-black' style={{backgroundColor: color}}></div>
    </div>

    <div className='w-full h-screen duration-200' style={{backgroundColor: 'black'}}>
      <div className='w-full py-3 fixed bottom-12 justify-center flex flex-wrap'>
        <div className='py-1 rounded-3xl bg-slate-100 gap-3 px-2 flex flex-wrap'>
          <button onClick={
            () => setColor("red")
          } className='bg-red-700 rounded-3xl p-1 px-3'>red</button>
          <button onClick={ 
            () => setColor("blue")
          } className='bg-blue-500 rounded-3xl p-1 px-3'>blue</button>
          <button onClick={
            () => setColor("violet")
          } className='bg-violet-700 rounded-3xl p-1 px-3'>violet</button>
          <button onClick={
            () => setColor("cyan")
          } className='bg-cyan-700 rounded-3xl p-1 px-3'>cyan</button>
          <button onClick={
            () => setColor("orange")
          } className='bg-orange-400 rounded-3xl p-1 px-3'>orange</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default BgChanger;