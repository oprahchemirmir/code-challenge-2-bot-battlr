import axios from "axios"
import BotCard from "./BotCard"
import React from "react"
import { useEffect, useState } from "react"

export default function BotsCollections(){
      //start here with your code for step one
  const [bots,setBots]=useState([])

  //API data fetch

  useEffect(()=>{
    axios.get("https://vercel-9yn2.vercel.app/bots")
    .then((res)=>{
        setBots(res.data)
        
        
    })

   

    // axios.delete("https://vercel-9yn2.vercel.app/bots/ + id"){
    // }

  },[])

function handleSubmits(bot){
    let oprah =document.querySelector(".BortArmy")
    let world =document.createElement('div')
    world.innerHTML=`
    <div className="image">
          <img alt="oh no!" className="card-img-top" src=${bot.avatar_url} />
        </div>
        <div className="content card-body" >
          <div className="header card-body">
        ${bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>${bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            ${bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            ${bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            ${bot.armor}
          </span>
          

        </div>
      </div>`
      world.addEventListener("click",()=> {
        world.remove()
      }) 
      oprah.appendChild(world)

    console.log(bot.name);
}

    //  const  handleSubmits= ({bot}) =>{
    //     console.log(bot);
    //  }

   return(
    
    <div className="Container" id="dele">
        
        {
            bots.map((bot)=>{
                // console.log(bot);
                return(
                    <div key={bot.id} id="Bots" className="card me-1 mt-1">
                       <BotCard
                       handleSubmits = {handleSubmits}
                       id = {bot.id}
                       key={bot.id}
                        bot = {bot}

                   
                        //  handleDelete = {handleDelete }
                       /> 
                      
                    </div>
                )
            })
        }
       
      
    </div>
     
   )
}