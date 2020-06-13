import React from 'react'
import HeaderMenu from './header-menu'
import FooterMain from './footer-main'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const LayoutMain = ({ preview, children }: Props) => {
  return (
    <>
      <HeaderMenu />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <FooterMain />
    </>
  )
}

export default LayoutMain
