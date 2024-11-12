import { useState } from "react"
export function RegisterForm() {
    const [formFields, setFormFields] = useState({
        username: "",
        password: "",
        displayName: ""
    })
    return <form>
        <div>
            <label htmlFor="username">Username: </label>
            <input
                id="username"
                type="text"
                value={formFields.username}
                onChange={(e) => setFormFields((currentState) => ({ ...currentState, username: e.target.value }))}

            />
            <br />
            <label htmlFor="password">Password: </label>
            <input
                id="password"
                type="password"
                value={formFields.password}
                onChange={(e) => setFormFields((currentState)=>({
                    currentState, password: e.target.value
                }))}
            />
            <br />
            <label htmlFor="displayName">Display Name: </label>
            <input
                id="displayName"
                type="text"
                value={formFields.displayName}
                onChange={(e) => setFormFields((currentState)=>({currentState, displayName:e.target.value}))}
            />
            <div>
                <p>username: {formFields.username}</p>
                <p>password: {formFields.password}</p>
                <p>displayName:{formFields.displayName}</p>
                {/* <button disabled={isDisable} type="submit">Register</button> */}
            </div>
        </div>
    </form>

}