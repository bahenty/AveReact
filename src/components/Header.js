import React from 'react'
import ReactDOM from 'react-dom'

import '../styles/components/_header.sass'


class Header extends React.Component {
    render(){
        return(
            <div id='my-header'>
                <p>Header</p>
                <img src="../images/innerTopPanelBg.png" alt=""/>
                <h2>asdasd</h2>
            </div>
        )
    }
}

export default Header