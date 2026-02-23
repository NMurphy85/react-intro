import React,  { useState } from 'react';

function Counter(){
// ['+','-','+']
const [ray, setRay] = useState([])
   
function plus(){
setRay(preRay => [...preRay,"+"])
}
function minus(){
setRay([])
}
return(
   <div>
       <button onClick={minus}>-</button>
       <button onClick={plus}>+</button>
       {ray.toString()}
    </div>

   )

}

export default Counter