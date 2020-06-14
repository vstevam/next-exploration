import React from 'react'

const HeaderMenu = () => {
  return (
      <header id="header">
        <a href="index.html"><img id="logo" src="/assets/images/logo_v2.png"></img></a>
        <nav id="nav">
          <ul>
            <li><a href="index">Home</a></li>
            <li><a href="resume">Resume</a></li>
            <li>
              <a href="research">VS Research</a>
              <ul>
                <li><a href="fire-group">FIRE Group</a></li>
                <li><a href="btrcast">BTRCast</a></li>
              </ul>
            </li>
            {/* <!-- <li><a href="index.html">Portfolio</a></li> --> */}
            <li><a href="impossible-list">Impossible List</a></li>

          </ul>
        </nav>
      </header>
  )
}

export default HeaderMenu
