"use client"

import { useEffect, useState } from "react";

import Image from 'next/image';
import patternDividerDesktop from '../images/pattern-divider-desktop.svg';
import iconDice from '../images/icon-dice.svg';
const Card = () => {

  const [data, setData] = useState();

  // Fetches date from adviceslip api
  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="font-sans flex flex-col justify-between items-center p-6 max-w-xl h-80 rounded-lg bg-bluish-grey ">
      
      <div className="flex flex-col items-center text-center gap-4">
        <p className="text-neon-green">Advice #{data && String(data["slip"]["id"])}</p>
        <p className="font-semibold text-quote">"{data && String(data["slip"]["advice"])}"</p>
      </div>

      {/* <MySVG /> */}

      <Image src={patternDividerDesktop} alt="" />

      <button className="relative top-12 bg-neon-green rounded-full p-4 shadow-neon-green hover:shadow-3xl "><Image src={iconDice} alt="" /></button>
    </div>
  )
}

export default Card