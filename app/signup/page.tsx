"use client";

import axios from "axios";
import { useState } from "react";

export default function Signup() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="h-screen w-screen flex justify-center items-center p-6">
        <div className="flex flex-col p-8 gap-4 border-r-2 rounded-2xl border-white">
            <div className="text-3xl text-white">Singup</div>
            <input type="text" placeholder="Enter username" className="border-2" onChange={(e) => {
                setUsername(e.target.value)
            }}/>
            <input type="password" placeholder="Enter password" className="border-2" onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <button className="w-full bg-amber-300 text-orange-700"
            onClick={() => {
                axios.post("http://localhost:3000/api/v1/signup", {
                    username,
                    password
                })
            }}
            >Create Account</button>
        </div>
    </div>
}