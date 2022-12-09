import React from 'react'
import Nav from '../components/Nav'
import App from '../components/App'
import NotFound from '../components/NotFound'
import About from '../components/About'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
const Router = () => {
  return (
      <BrowserRouter>
         {/* <Nav></Nav>
            <App></App> */}
        <Route path="/" component={Nav}></Route>
        <Switch>
        <Route path="/" exact component={App}></Route>
        <Route path="/about" component={About}></Route>
        <Route component={NotFound}></Route>

        </Switch>
       
      </BrowserRouter>
      )
}

export default Router
