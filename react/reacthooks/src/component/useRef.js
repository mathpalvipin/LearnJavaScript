import {useEffect, useRef, useState} from "react"
    const ReactHook =()=>{
        const [counter, setCounter]= useState(0)
        const [rendercount, setRenderCount]= useState(0);
//   const count = useRef(0);
  const increaseCounter=()=>{
    setCounter(prev=>prev +1);
    // count.current=count.current+1;
    // console.log(count.current);
      }
    useEffect(()=>{
        setRenderCount( pre=>pre +1);
    },[])  //The useEffect with the empty dependency array does not run again because it's only triggered after the first render.
    useEffect(()=>{
        setRenderCount( pre=>pre +1);
    },)  // render infinite time as render count is change and it is state of component

     return (
        <div>
            react hooks
            {/* <p > {count.current}</p> */}
            <p > {counter}</p>
            <p > render count {rendercount}</p>
            <button onClick={increaseCounter}>increase</button>
        </div>
     )
}
export default ReactHook;
