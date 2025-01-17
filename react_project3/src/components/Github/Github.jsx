import React from "react";
import { useState,useEffect } from "react";

function Github()
{
    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/users/prakrutipanchal')
        .then(res => res.json())
        .then(res => {
            setData(res)
        })
    })

    return(
        <div className="bg-gray-800 text-white p-4">
            Followers: {data.followers}<br/>
            ID: {data.login}, <br/>
            Created_at: {data.created_at},<br/>
            
        </div>
    )
}

export default Github;