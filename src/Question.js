import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import data from './data';
const Question = ({id,title,info}) => {
  const [show,setShow]=useState(false);
  return <>
          <h1>{title}</h1>
          <button onClick={()=>{setShow(!show)}} >

           {show?<AiOutlineMinus/>:<AiOutlinePlus/>}
           </button>
          {show&&<p>{info}</p>}
        
     
  </>;
};

export default Question;
