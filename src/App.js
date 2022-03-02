import React from "react";
import "./styles.css";
import { useEffect, useState, useRef } from "react";

import Moods from "./Moods";
import Shorts from "./Shorts";
export default function App() {
  let [btnversion, setbtnversion] = useState(1);
  const [myemotion, setmyemotion] = useState(0);
  useEffect(() => {
    var ws = new WebSocket(
      "wss://1ecuqkq2lk.execute-api.us-east-1.amazonaws.com/doom?id=4edf43a10bc57de7cd5911c2eaeb4a76dd179478ba78d76d80558cdbd23b9b29"
    );
    let that = this; // cache the this
    var connectInterval;

    // websocket onopen event listener
    ws.onopen = () => {
      console.log("connected websocket main component");
    };
    ws.onmessage = (event) => {
      console.log(event.data);
      setmyemotion(event.data);
    };
  }, []);
  
  return (
    <div className="App">

      <div className="header">
        Emotionly
      </div>
      <div className="sndheader">
        <div className="leftss">
          Current Emotion: 
          {myemotion==0?"--":myemotion=="happy"?"Happy":myemotion=="sad"?"Sad":myemotion=="neutral"?"Neutral":myemotion}
        </div>
      <div className="headerbottom">
       Only for Tech-A-Thon Hackathon
        </div>
      </div>
     

      <div className="container">
    <div className="btnarea">
    <button className="btn" onClick={()=>{
      setbtnversion(1);
    }}>Youtube Videos</button>
    <button className="btn" onClick={()=>{
      setbtnversion(2);
    }}
    >Memes</button>

    </div>

    <div className="contents">

    {
    
      
      btnversion==1?
    
        <div className="videos">
        <Moods mood={myemotion==0?"sad":myemotion} />
    </div>
     
   
:""}
{
   btnversion==2 ? 

<div className="meme">
<Shorts mood={myemotion==0?"sad":myemotion} />
  </div>

  : ""
}
      </div>
        </div>
     
    </div>
  );
}
