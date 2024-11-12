import PropTypes from "prop-types";
import { useState } from "react";

export function UserDetail({ users, setUsers }) {
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState(users.username)
    const [email, setEmail] = useState(users.email);
    return (
        <div>
        <div>
            <button onClick={()=>{
                setIsEditing((currentState)=>(!currentState));
            }}>Edit</button>
            <button onClick={()=>{
                setUsers((currentState)=>currentState.filter(
                    (currentState)=> currentState.id !== users.id 
                ))
            }}>Delete</button>
            {isEditing && (
                <button onClick={()=>{
                setUsers(
                    (currentStateState)=>{
                        return currentStateState.map(
                            (currentState)=> {
                                if(currentState.id === users.id){
                                    return {
                                       ...currentState,
                                        username: username,
                                        email: email
                                    }
                                } else {
                                    return currentState;
                                }
                            }
                            );
                    }
                )
                setIsEditing(false);
            }} >Save</button>
            )}
        </div>
        <div>
            <b>ID: </b>
            <span>{users.id}</span>
            <br />
            <b>username: </b>
            {isEditing ? <input name="username" value={username} onChange={(e)=>{
                setUsername(e.target.value);
            }} /> : <span>{users.username}</span>}
            <br />
            <b>Email: </b>
            {isEditing ? <input name="email" value={email} onChange={(e)=>setEmail(e.target.value)} /> : <span>{users.email}</span>}
        </div>
        
        </div>
    );
}

UserDetail.propTypes = {
    users: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
    setUsers: PropTypes.func.isRequired
};
