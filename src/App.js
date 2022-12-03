import React, { useState, useEffect, useInsertionEffect } from "react";
import './App.css';
import Axios from 'axios'

function App() {
  const [videoProvider, setVideoProvider] = useState("");
  const [videoProviderList, setProviderList] = useState([])

  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=> {
      console.log(response.data);
        setProviderList(response.data)
    })
  }, []);

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
       <label>Video Provider URL</label>
        <input type="text" name="videoProvider" onChange={(e)=> {
          setVideoProvider(e.target.value)
       }}/>

      <button onClick={submitProvider}>Submit</button>


       {videoProviderList.map((val)=>{
          return <h1>ProviderURL: {val.provider_url}</h1>
       })}
      </div>
    </div>
  );
}

export default App;
