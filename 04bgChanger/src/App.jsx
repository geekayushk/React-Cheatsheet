import { useState } from "react"
import './App.css'

function App() {
  const [color, setColor]=useState("black")

  return (
      <div className="container" style={{backgroundColor:color}}>
        <div className="box">
          <button className="colorBox red" onClick={()=>setColor("red")}>Red</button>
          <button className="colorBox yellow" onClick={()=>setColor("yellow")}>Yellow</button>
          <button className="colorBox green" onClick={()=>setColor("green")}>Green</button>
          <button className="colorBox blue" onClick={()=>setColor("blue")}>Blue</button>
          <button className="colorBox purple" onClick={()=>setColor("purple")}>Purple</button>
          <button className="colorBox olive" onClick={()=>setColor("olive")}>Olive</button>
          <button className="colorBox pink" onClick={()=>setColor("pink")}>Pink</button>
          <button className="colorBox orange" onClick={()=>setColor("orange")}>Orange</button>
        </div>
      </div>
  )
}

export default App
