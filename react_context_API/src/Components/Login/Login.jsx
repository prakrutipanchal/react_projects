import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

export default function Login() 
{
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const {setUser} = useContext(UserContext)

    const handlesubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return(
        <div>
            <h1>React course with chai aur code</h1>
            <input 
            type="text" 
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />

            <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handlesubmit}>Submit</button>
        </div>
    )
}
