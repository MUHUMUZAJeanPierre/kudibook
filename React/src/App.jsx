import { useEffect, useState } from "react"

export default function App(){
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        console.log("rendering...");
        document.title = "React tutorial" + counter;
    })
    // useEffect(() => {
        // This code runs every time the component re-renders
    //   });
      
    // useEffect(() => {
        // This code runs only once after the initial render
    //   }, []);

    // useEffect(() => {
    //     // This code runs only when dep1 or dep2 change
    //   }, [dep1, dep2]);
      
      
    return <div>
        <div>You clicked the button {counter} times </div>
        <button onClick={()=>setCounter((count)=> count +1)}>Click Me</button>
    </div>
}