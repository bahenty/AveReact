import React from 'react'
import { Link } from 'react-router-dom'

const Brand = () => {
  return (
    <div>
      <p>The brand</p>
      <Link to="/brand/1">Jeans</Link>
      <Link to="/brand/2">Boot</Link>
    </div>
  )
}

export default Brand