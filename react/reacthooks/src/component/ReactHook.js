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
    // useEffect(()=>{
    //     setRenderCount( pre=>pre +1);
    // },[])  //The useEffect with the empty dependency array does not run again because it's only triggered after the first render.
    // //will not give user render count as it will called again after any render 
    
    // useEffect(()=>{
    //     setRenderCount( pre=>pre +1);
    // },)  // render infinite time as render count is change and it is state of component

    //   useEffect(()=>{
    //     setRenderCount( pre=>pre +1);
    // }, [counter])  // same infinite time render as dependecy change   inside call back

//  what is solution to count render of compoent?
//  use ref 
//  it will not render the compoent on it value change

const counterRef = useRef(0);

useEffect(()=>{
    counterRef.current=counterRef.current+1;
    console.log(counterRef.current);
}, ) // on each render it udpate the counterred.cuurent value but did not make another render




     return (
        <div>
            react hooks
            {/* <p > {count.current}</p> */}
            <p > {counter}</p>
            <p > render count {rendercount}</p>
            <p > render ref count {counterRef.current}</p>
            <button onClick={increaseCounter}>increase</button>
        </div>
     )
}
export default ReactHook;
