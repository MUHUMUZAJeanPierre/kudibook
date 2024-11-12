import {  useState } from "react";
import { LoginForm } from "./components/LoginForm";

export default function App() {
 
const [toggle, setToggle] = useState(false);
    
return <div>
    <button onClick={()=>{
        setToggle((currentToggle)=>(!currentToggle));
    }}>
        Toggle
    </button>
    {toggle && <LoginForm/>}
</div>;
}
