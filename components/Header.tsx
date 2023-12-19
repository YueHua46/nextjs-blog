import Link from 'next/link'
import { headers } from '../public/data'
import { cn } from '@/lib/utils'

export default function Header() {
  return (
    <header className={cn('py-8 flex justify-between gap-60')}>
      <h1
        className={cn('font-bold text-3xl text-mc cursor-pointer select-none')}
      >
        <Link href={'/home'}>HOME</Link>
      </h1>
      <nav className={cn('flex-1')}>
        <ul className={cn('flex justify-between')}>
          {headers.map((item) => {
            return (
              <Link
                href={item.href}
                key={item.href}
                className={cn('text-lg hover:text-mc transition-colors')}
              >
                {item.title}
              </Link>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
