import React, {Component} from 'react'
import { Header, Sidebar } from '../../components/molekuls'
import './mainAdm.scss'

export default class MainAdm extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />
                        <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            {this.props.children}
                        </main>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


// import React from 'react'
// // import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// // import {Create, Update, View, List} from '../Blog'
// // import Dashboard from '../Dasboard'
// import { Header, Sidebar } from '../../components/molekuls'
// import './mainAdm.scss'
// // import { PageNotFound } from '../../../config'

// const MainAdm = () => {
//     return (
//         <div className="main-wrapper-adm">
//             <div className="left-wrapper bg--primary">
//                 <Sidebar />
//             </div>
//             <div className="right-wrapper">
//                 <Header />
//                 <div className="container-fluid">
//                     {this.props.children}
//                     {/* <Router>
//                         <Switch>
//                             <Route path="/adm-panel/blog/update">
//                                 <Update />
//                             </Route>
//                             <Route path="/adm-panel/blog/create">
//                                 <Create />
//                             </Route>
//                             <Route path="/adm-panel/blog/title-blog">
//                                 <View />
//                             </Route>
//                             <Route path="/adm-panel/blog">
//                                 <List />
//                             </Route>
//                             <Route path="/adm-panel" >
//                                 <Dashboard />
//                             </Route>
//                             <Route >
//                                 <PageNotFound />
//                             </Route>
//                         </Switch>
//                     </Router> */}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default MainAdm
