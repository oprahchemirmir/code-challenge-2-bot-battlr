
import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, id , handleSubmits}) {
  

  const handleDelete = (e) => {
    console.log(id)
    fetch(`https://vercel-9yn2.vercel.app/bots/${id}`, {
      method: "DELETE"
    })
      .then(() => {
      })
  }

  return (

    //     <div class="card" style="width: 18rem;">
    //   <img src="..." class="card-img-top" alt="...">
    //   <div class="card-body">
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //   </div>
    // </div>
    <div className="ui column" key={bot.id} id="del" onClick={()=>{
      handleSubmits(bot)
    }}>
      <div
      // className="ui card"
      //  onClick={() =>handleClick(bot.id)}
      >
        <div className="image">
          <img alt="oh no!" className="card-img-top" src={bot.avatar_url} />
        </div>
        <div className="content card-body" >
          <div className="header card-body">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <div className="ui center aligned segment basic">
            <button onClick={(e) => {
              const Cont = document.getElementById('Bots')
              e.stopPropagation()
              handleDelete()
              Cont.remove()
            }}>X</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BotCard;