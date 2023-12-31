'use client'

import Link from 'next/link'

interface CardProps {
  title: string
  path: string
}

export default function Card({ title, path }: CardProps) {
  return (
    <Link href={path}>
      <div className="flex h-14 w-full cursor-pointer items-center justify-center rounded-md bg-white bg-opacity-50 px-5 py-5 drop-shadow-lg backdrop-blur-lg transition-colors hover:bg-opacity-60 lg:max-w-[50%]">
        <p className="w-full text-center font-bold hover:scale-[1.05] ">
          {title}
        </p>
      </div>
    </Link>
  )
}
