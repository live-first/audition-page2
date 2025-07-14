'use client'

import { ReactNode } from 'react'

export type LayoutProps = {
  header: ReactNode
  main?: ReactNode
  allView?: ReactNode
  footer?: ReactNode
}

export const SingleViewLayout = (props: LayoutProps) => {
  const { header, main, allView, footer } = props

  return (
    <div>
      <header className='fixed w-full h-16 z-50'>{header}</header>
      <main className='min-h-[900px] flex flex-col'>
        {main}
        {allView}
      </main>
      <footer>{footer}</footer>
    </div>
  )
}
