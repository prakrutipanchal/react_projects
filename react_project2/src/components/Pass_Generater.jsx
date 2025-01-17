import React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';

function Pass_Generater()
{ 
    let [length, setLength] = useState(15)
    let [numAllowed, setNumAllowed] = useState(false)
    let [charAllowed, setCharAllowed] = useState(false)
    let [password, setPassword] = useState()

    const passwordRef = useRef(null)

    let pass_Generater = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numAllowed) str += "0123456789"
        if(charAllowed) str += "!@#$%^&*(){}-_=+<>?"

        for(let i=0; i<length; i++)
        {
            let char = Math.floor(Math.random()*str.length)
            pass += str.charAt(char)
        }
        setPassword(pass)
    }, [length, numAllowed, charAllowed, setPassword])
    
    const CopyToClipboard = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(() => {
            pass_Generater()
        }, [length, numAllowed, charAllowed, pass_Generater])

    return(
        <div className='w-full max-w-md mx-auto rounded-lg shadow-md px-4 my-8 py-4 text-orange-500 bg-gray-800'>
            <h1 className='text-white text-center'>Password Generater</h1>
            
            <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-2'>
                <input type="text" 
                className='outline-none w-full py-1 px-3'
                placeholder='Password'
                value={password}
                ref={passwordRef}
                readOnly
                />

                <button 
                onClick={CopyToClipboard} 
                className='bg-blue-600 outline-none py-1 px-3 shrink-0 text-white active:bg-blue-400'>Copy</button>
            </div>  

            
            <div className="flex text-sm gap-x-3">
                <div className="flex items-center gap-x-1">
                    <input type="range" 
                    min={6}
                    max={24}
                    value={length}
                    onChange={(e) => {setLength(e.target.value)}}/>

                    <label>Length: {length}</label>
                </div>

                <div className='flex gap-x-1 items-center'>
                    <input type="checkbox"
                    defaultChecked={numAllowed}
                    onChange={() => {
                        setNumAllowed((e) => !e);
                    }}
                    />
                    <label>Numbers</label>
                </div>

                <div className='flex gap-x-1 items-center'>
                    <input type="checkbox"
                    defaultChecked={charAllowed}
                    onChange={() => {
                        setCharAllowed((e) => !e);
                    }}
                    />
                    <label>Character</label>
                </div>
            </div>
        </div>
    );
}

export default Pass_Generater;