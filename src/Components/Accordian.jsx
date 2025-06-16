import { useState, useContext } from "react"
import { accordianContext } from "../Context/AccordianContext";


export default function Accordian() {
    const {data} = useContext(accordianContext);
    const [currIndex,setcurrIndex] = useState(0);
  return (
    <div className="maincontainer">
        {data.map((item,index)=>{
            return(
            <div key={index} className="accbox">
                <div className="quebox">
                    <h3>{item.question}</h3>
                    {index===currIndex ? <button className='btn' onClick={()=>{ setcurrIndex(null)}}>-</button> : <button className='btn' onClick={()=>{ setcurrIndex(index)}}>+</button>}
                    {/* <button className='btn'>-</button> */}
                </div>
                {index===currIndex && <p className="ansbox">{item.answer}</p>}
            </div>
            )
    })}
    </div>
  )
}
