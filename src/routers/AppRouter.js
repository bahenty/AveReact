import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const dashboard = () => (
  <div>
    This is dashboard component
    </div>
);

const create = () => (
  <div>
    This is create component
    </div>
);

const NotFoundPage = () => (
  <div>
    404 - Page not found! <Link to="/">Go home</Link>
  </div>
);

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={dashboard} exact={true} />
      <Route path="/create" component={create} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;