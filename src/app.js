import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter';
import Header from './components/Header'

import Footer from './components/Footer'


class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        )
    }
}



ReactDOM.render(<AppRouter />, document.getElementById('root'));