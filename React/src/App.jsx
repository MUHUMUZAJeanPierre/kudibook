import { useState } from "react";
import { UserDetail } from "./components/UserDetail";

export default function App(){
    const [users , setUsers] = useState([
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
        {users.map((users)=>(
            <UserDetail key={users.id} users={users} setUsers={setUsers} />
        ))}
    </div>
}