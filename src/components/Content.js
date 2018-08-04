import React from 'react'
import '../styles/main.sass'


class Content extends React.Component {
  render() {
    return (
      <div id='my-content'>
        <p>content</p>
        <button className="btn">Shop men's collection</button>
      </div>
    )
  }
}

export default Content