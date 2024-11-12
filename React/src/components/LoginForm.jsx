import { useEffect } from "react";

export default function LoginForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const password = formData.get('password');

        // Fetch request to login endpoint
        fetch("http://localhost:3001/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log("Login successful:", data);
            // Handle login success (e.g., storing a token, navigating)
        })
        .catch(error => {
            console.error("Error logging in:", error);
            // Handle login error
        });
    };

    useEffect(() => {
        const resizeEventHandler = () => {
            console.log("window/viewport resized");
        };

        // Add event listener for resize
        window.addEventListener("resize", resizeEventHandler);

        // Cleanup function to remove event listener on component unmount
        return () => {
            console.log("Unmounting LoginForm");
            window.removeEventListener("resize", resizeEventHandler);
        };
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label><br />
            <input 
                id="username" 
                type="text"
                name="username"
                onChange={(e) => {
                    console.log(`value changed: ${e.target.value}`);
                }}
            />
            <br />
            <label htmlFor="password">Password: </label><br />
            <input 
                id="password" 
                type="password" 
                name="password" 
                onKeyDown={(e) => {
                    console.log(e.key);
                }}
                onChange={(e) => {
                    console.log(`value changed: ${e.target.value}`);
                }}
            />
            <br />
            <button type="submit">Login</button>
        </form>
    );
}
