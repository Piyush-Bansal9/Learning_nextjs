import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col p-4 justify-center items-center gap-2">
      <div  className="text-5xl text-white">
        Todo Application
      </div>
      <div>
        <Link href="/signup" className="text-3xl text-yellow-400 border-2 rounded-3xl mb-2 p-2 mt-2">Singup</Link>
      </div>
      <div>
      <Link href="/signin" className="text-3xl text-yellow-400 border-2 rounded-3xl mt-2 p-2">Signin</Link>
      </div>
    </div>
  );
}
