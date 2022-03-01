import React from 'react'
import clasess from './Nav.module.css'

function Nav() { 
    return(
    <div >
        <ul className={clasess.nav}>
            <li>Home</li>
            <li>About</li>
            <li>Archive</li>
        </ul>
    </div>
    )
}
export default Nav;