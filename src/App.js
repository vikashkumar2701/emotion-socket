import React from "react";
import "./styles.css";
import { useEffect, useState, useRef } from "react";

import Moods from "./Moods";

export default function App() {
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
      <div className="headerbottom">
       Only for Tech-A-Thon Hackathon
        </div>

      <div className="container">
    <div className="btnarea">
    <button className="btn">Shorts</button>
    <button className="btn">Youtube Videos</button>

    </div>

    <div className="contents">

    <div className="shorts">
    <Moods mood="happy" />
</div>

<div className="Videos">

  </div>

      </div>
        </div>
     
    </div>
  );
}
