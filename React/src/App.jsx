import { useState } from "react";
import { UserDetail } from "./components/UserDetail";

export default function App() {
    const [username, setUsername] =useState("");
    const [email, setEmail] =useState("");
    const [counter, setCounter] = useState(4)

    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'anson',
            email: 'anson@gmail.com'
        },
        {
            id: 2,
            username: 'james',
            email: 'james@gmail.com'
        },
        {
            id: 3,
            username: 'john',
            email: 'john@gmail.com'
        }
    ])

    return <div>
        <div>
        <form onSubmit={(e)=>{
            e.preventDefault();
            const newUser = {
                id: counter,
                username,
                email
            }
            setCounter((currentCounter)=> currentCounter + 1);
            setUsers((currentUserState)=> [...currentUserState, newUser])
        }}>
            <div>
                <label htmlFor="username">Username: </label>
                <input  value={username} onChange={(e)=> setUsername(e.target.value)} id="username" type="text" />
                <br />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input id="email" value={email} onChange={(e)=> setEmail(e.target.value)} type="text" />
            </div>
            <button>Add users</button>
        </form>
        </div>
        <br />
        {users.map((users) => (
            <UserDetail key={users.id} users={users} setUsers={setUsers} />
        ))}
    </div>
}