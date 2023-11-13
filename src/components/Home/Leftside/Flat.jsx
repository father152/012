import React from 'react'
import { Link } from 'react-router-dom'


function Flat() {
  return (
    <div>
    <p>Flat</p>
    <Link to="/" className="back">
        Home
      </Link>
    </div>
  )
}
export {Flat}