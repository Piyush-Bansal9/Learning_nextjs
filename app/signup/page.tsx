"use client";

export default function Signup() {
    return <div className="h-screen w-screen flex justify-center items-center">
        <div className="flex flex-col p-4 gap-4 border-r-2 rounded-2xl">
            <div className="text-3xl text-white">Singup</div>
            <input type="text" placeholder="Enter username" className="border-2"/>
            <input type="password" placeholder="Enter password" className="border-2"/>
            <button className="w-full bg-amber-300 text-orange-700"
            onClick={() => {
                
            }}
            >Create Account</button>
        </div>
    </div>
}