import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Admin, User} from '../Authorization'

// Error page
import PageNotFound from '../PageNotFound'

// Auth Page
import {Login, Register} from '../../auths'

// Main Page
import { Home, Main, About } from '../../app/pages'

// Admin Page
import {MainAdm, Dasboard, List} from '../../adm/pages'
// // import {Create, Update, View, List} from '../Blog'

// Layout Main Page
const AppRoute = ({component: Component, layout: Layout, ...rest}) => (
    <Route 
        {...rest}
        render={props => (
            <Layout>
                <Component {...props}></Component>
            </Layout>
        )}>
    </Route>
)


const Routes = () => {
    return (
        <Router>
            <Switch>
                {/* Route User */}
                <AppRoute path="/" layout={Main} component={Home} exact />
                <AppRoute path="/about" layout={Main} component={About} />

                {/* Route Admin */}
                {/* <Route component={Admin(MainAdm)} exact /> */}
                <AppRoute path="/adm-panel" layout={MainAdm} component={Admin(Dasboard)} exact />
                <AppRoute path="/adm-panel/blog" layout={MainAdm} component={Admin(List)}  />

                {/* Route Auth */}
                <Route path="/sign-up" component={Register} />
                <Route path="/sign-in" component={Login} />

                {/* Other Route */}
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    )
}

export default Routes
