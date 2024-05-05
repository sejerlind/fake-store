"use client"
  
  import React, { useState } from "react";
  import { IoCartOutline } from "react-icons/io5";
  
  export default function Cart() {
    const [count, setCount] = useState(0);
  
    return (
      <div className="flex items-center">
        <IoCartOutline />
        <div  className="flex bg-blue-400 rounded-full items-center justify-center w-7 h-7">
          <p>{count}</p>
        </div>
      </div>
    );
  }