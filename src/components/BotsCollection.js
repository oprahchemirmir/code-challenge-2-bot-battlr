import axios from "axios"
import BotCard from "./BotCard"
import React from "react"
import { useEffect, useState } from "react"


export default function BotsCollection(){
      //start here with your code for step one
  const [bots,setBots]=useState([])

  //API data fetch

  useEffect(()=>{
    axios.get("https://vercel-9yn2.vercel.app/bots")
    .then((res)=>{
        setBots(res.data)
        console.log(res);
    })

  },[])
   return(
    <div>
        {
            bots.map((bot)=>{
                console.log(bot);
                return(
                    <div>
                       <BotCard
                        bot = {bot}
                       /> 
                    </div>
                )
            })
        }

    </div>
   )
}