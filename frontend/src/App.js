import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios'

function App() {
  const [videoProvider, setVideoProvider] = useState("");

  const submitProvider = () =>{
    Axios.post('http://localhost:3001/api/insert', {
      providerName: videoProvider
    }).then(() => {
      alert("successful insert");
    });
  };

  return (
    <div className="App">
      <h1>174 APPLICATION</h1>

      <div className="form">
       <label>Video Provider</label>
        <input type="text" name="videoProvider" onChange={(e)=> {
          setVideoProvider(e.target.value)
       }}/>

      <button onClick={submitProvider}>Submit</button>

      </div>
    </div>
  );
}

export default App;
