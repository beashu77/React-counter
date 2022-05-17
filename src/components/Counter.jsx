
import React,{useState} from "react";
import styles from './style.module.css';

const Counter =()=>{
  const [count,setCount]=useState(0);
  return (
    <div>
      <h1 className={count % 2===0 ? styles.greenCol : styles.redCol}>Counter App:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Inc</button>
      <button onClick={()=>setCount(count-1)}>Dec</button>
      <button onClick={()=>setCount(count*2)}>Double</button>
    </div>
  )
}

export default Counter;









// export default function Counter() {
//   let [counter,setCounter]=React.useState(5);
//   //destructuring 
//   //React.useState=>return array of two element
//   const handleIcrement=(value)=>{
//    setCounter(counter+value);
    
//   }
//   return (
//       <>
//       <h1>Counter</h1>
//       <h2>{counter}</h2>
//       <button onClick={()=>handleIcrement(1)}>ADD</button>
//       <button onClick={()=>handleIcrement(-1)}>Reduce</button>
//       </>

//   );
// }

//state
//props
//hooks
//state is something that the component remembers