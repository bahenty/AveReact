import React from 'react'

import '../styles/main.sass'


class Header extends React.Component {
    render() {
        return (
            <div id='my-header'>
                <p>Header</p>
                <img src={require('../images/innerTopPanelBg.png')} alt=""/>
                <h2>asdasd</h2>
            </div>
        )
    }
}

export default Header