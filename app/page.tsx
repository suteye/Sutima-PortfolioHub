"use client";
import { Button } from '@nextui-org/react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Button>Home Page</Button>
      <Image src="./next.svg" alt="Vercel Logo" width={72} height={16} />
    </main>
  )
}
