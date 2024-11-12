import { useEffect } from "react";
import { useDocumentClick } from "../utils/hooks/useDocumentClick";

export function LoginForm(){
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const password = formData.get('password');
        fetch("localhost:3001/api/login", {
            body:{
                username,
                password
            },
            method:"POST",
        })
        console.log(formData.get('username'))


    }


    useEffect(() => {
        const resizeEventHandler = () => {
            console.log("window/viewport resized");
        };

        window.addEventListener("resize", resizeEventHandler);

        return () => {
            console.log("unmounting loginForm");
            console.log("removing resize event lister");
            window.removeEventListener("remove", resizeEventHandler);
            
        };


    }, []);

    useDocumentClick()


    return <form onSubmit={handleSubmit}>
        <label htmlFor="username" >Username: </label><br />
        <input 
        id="username" 
        type="text"
        name="username"
        onChange={(e)=>{
            console.log(`value changed ${e.target.value}`)
        }}
         />
        <br />
        <label htmlFor="password">Password: </label><br />
        <input 
        id="password" 
        type="password" 
        name="password" 
        onKeyDown={(e)=>{
            console.log(e.key)
        }}
        onChange={(e)=>{
            console.log(`value changed ${e.target.value}`)
        }}

        />
        <br />
        <button type="submit">login</button>
    </form>
}