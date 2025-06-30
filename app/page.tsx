import { getServerSession } from "next-auth";
import { getServerSideProps } from "next/dist/build/templates/pages";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default async function Home() {

  const session = await getServerSession();

  return (

    <div>
      {JSON.stringify(session)}
    </div>
  );
}
