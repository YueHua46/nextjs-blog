import { cn } from '@/lib/utils'
import React from 'react'

export default function Footer() {
  return (
    <footer className={cn('py-8 flex justify-center text-gray-400')}>
      <p>版权所有 © 2023 [yuehua]. 保留所有权</p>
    </footer>
  )
}
