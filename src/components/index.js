import React from "react";
import ReactDOM from "react-dom/client"
import { useState, useEffect } from "react";

const Headerfeatch = () => {

const [updateUI , setUpdateUI] = useState([])

useEffect( () => {
    fetchData()
},[])
const fetchData  = async() => {
  const data = await fetch("https://hn.algolia.com/?dateRange=all&page=0&prefix=true&query=hero&sort=byPopularity&type=story")
  const json = await data.json();
  console.log(json)
}
  return (
    <div className="head_container">

        <input type = "text"></input>
        <button>Search{updateUI}</button>
        
    </div>
  )
}

const rootEl = ReactDOM.createRoot(document.getElementById("root"))

rootEl.render(<Headerfeatch/>)
