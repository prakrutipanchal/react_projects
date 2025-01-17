import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";

function Pass_Generater()
{
    const[length, setLength] = useState(15)
    const[numAllowed, setNumAllowed] = useState(false)
    const[charAllowed, setCharAllowed] = useState(false)
    const[password, setPassword] = useState()

    const passwordRef = useRef(null)

    const passwordGenerater = useCallback(() => {
        let pass = "" 
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numAllowed) str += "0123456789"
        if(charAllowed) str += "!@#$%^&*()_-+{}[]*/"

        for(let i=1; i<=length; i++)
        {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)
        
    }, [length, numAllowed, charAllowed, setPassword])

    const CopyToClipboard = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(() => {
        passwordGenerater()
    }, [length, numAllowed, charAllowed, passwordGenerater])

    return(
        <div className="w-full max-w-md mx-auto rounded-lg shadow-md px-4 my-8 py-4 text-orange-500 bg-gray-800">
            <h1 className="text-white text-center"> Password</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input type="text" 
                value={password}
                placeholder="password"
                className="outline-none w-full py-1 px-3" 
                readOnly 
                ref={passwordRef}/>   

                <button
                onClick={CopyToClipboard}
                className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0">Copy</button>             
            </div>

            <div className="flex text-sm gap-x-2">
                <div className="flex items-center gap-x-1">
                    <input type="range"
                    min={6}
                    max={100}
                    value={length}
                    className="cursor-pointer"
                    onChange={(e) => {setLength(e.target.value)}}/>
                
                    <label>Length: {length}</label>
                </div>

                <div className="flex items-center gap-x-1">
                    <input type="checkbox" 
                    defaultChecked={numAllowed}
                    id="numberInput" 
                    onChange={() => {
                        setNumAllowed((prev) => !prev);
                    }}/>
                </div>
                <label htmlFor="numberInput">Numbers</label>

                <div className="flex items-center gap-x-1">
                    <input type="checkbox" 
                    defaultChecked={charAllowed}
                    id="charInput" 
                    onChange={() => {
                        setCharAllowed((prev) => !prev);
                    }}/>
                </div>
                <label htmlFor="CharInput">Character</label>
            </div>
        </div>
        
    );
}

export default Pass_Generater;


