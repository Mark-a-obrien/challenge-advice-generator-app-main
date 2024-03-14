"use client"

import { useEffect, useState } from "react";

import Image from 'next/image';
import patternDividerDesktop from '../images/pattern-divider-desktop.svg';
import iconDice from '../images/icon-dice.svg';

const Card = () => {

  const [data, setData] = useState<{slip:{id:string, advice:string}}>();

  function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

  // Fetches date from adviceslip api
  async function getAdvice() {
    const response = await fetch(`https://api.adviceslip.com/advice/${getRandomInt(200)}`);
    const advice = await response.json();
    setData(advice);

    console.log(advice)
  }
  
  // useEffect(() => {
  //   getAdvice()
  // }, [])

  return (
    <div className="font-sans flex flex-col justify-between items-center p-6 max-w-xl h-80 rounded-lg bg-bluish-grey ">
      
      <div className="flex flex-col items-center text-center gap-4">
        <p className="text-neon-green">Advice #{data && data.slip !== undefined && String(data["slip"]["id"])}</p>
        <p className="font-semibold text-quote">"{data && data.slip !== undefined && String(data["slip"]["advice"])}"</p>
      </div>

      <Image src={patternDividerDesktop} alt="" />

      <button onClick={() => getAdvice()} className="relative top-12 bg-neon-green rounded-full p-4 shadow-neon-green hover:shadow-3xl "><Image src={iconDice} alt="" /></button>
    </div>
  )
}

export default Card