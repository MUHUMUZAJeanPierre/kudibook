import { useEffect, useState } from "react"

export default function App(){
    const [counter, setCounter] = useState(0);
    const [sync, setSync] = useState(false);
    
    useEffect(()=>{
        console.log("rendering...");
        document.title = "React tutorial" + counter;
    }, [sync])

    // useEffect(()=>{
    //      fetch(`https://jsonplaceholder.typicode.com/users`,  {
    //         method: 'GET',
    //     }).then((response)=>{
    //         return response.json()
            
    //     }).then((data)=>{
    //         console.log(data)
    //     })
    //     .catch((error)=>{
    //         console.error("Error fetching users: ", error);
    //     })
    // })
      
    useEffect(() => {
        const controller = new AbortController();

        async function fetUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users',{
                    signal: controller.signal
                });
                const json = await response.json();
                console.log("Fetched users:", json);  
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }
        
        fetUsers() ; 
        return ()=>{
            controller.abort();
        }
    }, []);  
    
    return <div>
        <div>You clicked the button {counter} times </div>
        <button onClick={()=>setCounter((count)=> count +1)}>Click Me</button>
        <button onClick={()=>setSync((current)=>!current)}>Sync</button>
    </div>
}