import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content'
import NotFoundPage from '../components/pages/NotFoundPage'
import Mens from '../components/pages/Mens'
import Womens from '../components/pages/Womens'
import Brand from '../components/pages/Brand'
import Stores from '../components/pages/Stores'
import Lookbook from '../components/pages/Lookbook'


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Content} exact={true} />
        <Route path="/mens" component={Mens} />
        <Route path="/womens" component={Womens} />
        <Route path="/brand" component={Brand} />
        <Route path="/stores" component={Stores} />
        <Route path="/look-book" component={Lookbook} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter