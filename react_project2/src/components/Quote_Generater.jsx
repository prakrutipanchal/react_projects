import React from "react";
import { useState } from "react";

function Quote_Generater()
{
    const [Quotes, setQuotes] = useState("")

    const show_Quotes = () => {

        const quotes = [
            "Dream big, work hard.",
            "Stay positive, stay fighting.",
            "You are stronger than you think.",
            "Believe in yourself.",
            "Stay humble, hustle hard.",
            "Progress, not perfection.",
            "Create your own sunshine.",
            "Keep going, keep growing.",
            "Happiness is homemade.",
            "Small steps, big results.",
            "Shine like the stars.",
            "Think less, do more."
          ];

          let str = Math.floor(Math.random()*quotes.length)
          setQuotes(quotes[str])
    }

    return(
        <div className="bg-gray-900 mx-auto text-orange-400 px-4 my-8 py-4 w-full max-w-md mt-20 rounded-md justify-center">
            <input type="text" 
            value={Quotes}
            className="w-full px-3 py-1 justify-center rounded-lg"
            placeholder="Quotes"
            readOnly
            />

            <div className="p-0.5 rounded-2xl px-2 py-3 mt-4 text-orange-500 justify-center flex">
                <button
                onClick={show_Quotes}
                className="bg-yellow-50 rounded-2xl p-1 px-2 border-2 border-transparent active:border-orange-500 border-l text-gray-900">
                    Show
                </button>
            </div>
        </div>
    )
}

export default Quote_Generater;