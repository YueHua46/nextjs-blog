import MainLeft from '@/components/MainLeft'
import { cn } from '@/lib/utils'
import React from 'react'

export default function page() {
  return (
    <div className={cn('flex justify-between')}>
      <MainLeft
        small="FreeLoop"
        title="欢迎 来到 我的网站"
        description="在这里，你可以发现我的日常生活记录以及我个人的照片，并且深入了解它们背后的探索性解释"
        link="about"
        linkStr="About Me"
      />
      {/* 插入图片，一张大一张小，小的图层在大的上面，有一定美观效果 */}
      <div className={cn('flex flex-col gap-6')}>
        <div className={cn('flex flex-col gap-6 relative')}>
          <img
            src="/images/1.jpeg"
            alt="1"
            className={cn(
              'relative -top-20 -left-40 hover:cursor-pointer transition-transform transform hover:scale-110 rounded-[4px] shadow-lg w-80 h-80 object-cover object-top'
            )}
          />
          <img
            src="/images/2.webp"
            alt="2"
            className={cn(
              'absolute right-0 bottom-0 hover:cursor-pointer transition-transform transform hover:scale-110 rounded-[10px] shadow-lg w-60 h-40 object-cover object-top'
            )}
          />
        </div>
      </div>
    </div>
  )
}
