"use client"
import React, { useState } from "react";


export default function CartButton() {
    const [buttonText, setButtonText] = useState("Add to Cart");
    
    const handleClick = () => {
        setButtonText("Item Added");
        //here will we send a api call so we can show it in the cart
      };
    return (
        <button onClick={handleClick} className="bg-blue-500 transition-colors hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {buttonText}
      </button>
    )
    
    ;
  }
