import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './ui/button'

interface MainLeftProps {
  small: string
  title: string
  description: string
  link: string
  linkStr: string
}

export default function MainLeft({
  small,
  title,
  description,
  link,
  linkStr,
}: MainLeftProps) {
  const titleStrs = title.split(' ')

  return (
    <div className={cn('flex flex-col gap-6')}>
      {/* small */}
      <h2 className={cn('text-mc font-semibold text-2xl')}>{small}</h2>
      {/* title */}
      <div className={cn('flex flex-col gap-2')}>
        <h1
          className={cn(
            'flex flex-col cursor-pointer font-bold text-4xl whitespace-normal w-40 transition-transform transform hover:scale-110'
          )}
        >
          {titleStrs.map((str, idx) => {
            return idx === titleStrs.length - 2 ? (
              <div key={idx} className={cn('relative')}>
                <span
                  className={cn(
                    '-z-10 absolute w-full bg-mc shadow-md rounded-[2px] h-1/2 bottom-0'
                  )}
                ></span>
                <span>{str.toUpperCase()}</span>
              </div>
            ) : (
              <span key={idx}>{str.toUpperCase()}</span>
            )
          })}
        </h1>
        {/* description */}
        <h3 className={cn('text-xl w-2/3')}>{description}</h3>
      </div>
      {/* link */}
      <Link href={`/${link}`}>
        <Button
          className={cn(
            'hover:text-white transition-all transform hover:scale-110 bg-mc hover:bg-mc'
          )}
        >
          {linkStr}
        </Button>
      </Link>
    </div>
  )
}
