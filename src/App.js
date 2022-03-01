import React from "react";
import "./styles.css";
import { useEffect, useState, useRef } from "react";

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
      <>Vikash is {myemotion}</>
    </div>
  );
}
