import React from 'react'

const BrandItemPage = (props) => (
  <div>
    <p>The brand</p>
    <span>The item page with the id {props.match.params.id}</span>
  </div>
)

export default BrandItemPage