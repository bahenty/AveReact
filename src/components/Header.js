import React from 'react'
import ReactDOM from 'react-dom'

import '../styles/components/_header.sass'


class Header extends React.Component {
    render(){
        return(
            <div id='my-header'>
                <p>Header</p>
                <img src="../images/innerTopPanelBg.png" alt=""/>
            </div>
        )
    }
}

export default Header