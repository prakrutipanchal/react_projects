import React, {useContext} from "react";
import UserContext from "../../context/UserContext";

export default function Login() 
{
    const {user} = useContext(UserContext)
    
    if(!user) return <div>No user, Please login!!</div>

    return <div>Welcome, {user.username}</div>
}