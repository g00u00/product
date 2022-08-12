import React from 'react'
import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <div  style={{margin:20}}>
      <div>React2022: https://v5.reactrouter.com/</div>
        <div>https://github.com/remix-run/react-router/</div>
        <div>yarn add react-router-dom</div>
      <span>
        <Link to="/about">About</Link>
        <Link to="/">Products</Link>
      </span>
    </div>
  )
}