"use client";

import {useState} from "react";

export default function Home() {

  const [inputVal,setInputVal] = useState("");

  return (
      <div>
        <div>
          <h1>
            Enter your name
          </h1>
        </div>
        <form>
          <input type="text" placeholder="Type your name..." value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
          <button type="submit">Predict data</button>
        </form>
      </div>
  )}