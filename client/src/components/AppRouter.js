import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BlogPage from './BlogPage'
import Home from './Home'

const AppRouter = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/blog" component={BlogPage}/>
    </Switch>
)

export default AppRouter