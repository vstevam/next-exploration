import React from 'react'
import Link from 'next/link'

const HeaderMenu = () => {
  return (
      <header id="header">
        <a href="index.html"><img id="logo" src="/assets/images/logo_v2.png"></img></a>
        <nav id="nav">
          <ul>
            <li><Link href="/index"><a>Home</a></Link></li>
            <li><Link href="/resume"><a>Resume</a></Link></li>
            <li><Link href="/blog"><a>Blog</a></Link></li>
            <li>
            <Link href="/research">
              <a>VS Research</a>
              </Link>
              <ul>
                <li><Link href="/fire-group"><a>FIRE Group</a></Link></li>
                <li><Link href="/btrcast"><a>BTRCast</a></Link></li>
              </ul>
            </li>
            {/* <!-- <li><a href="index.html">Portfolio</a></li> --> */}
            <li><Link href="/impossible-list"><a>Impossible List</a></Link></li>

          </ul>
        </nav>
      </header>
  )
}

export default HeaderMenu
