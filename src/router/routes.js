import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import NavBar from '../components/navbar/NavBar'
import Sidebar from '../components/sidebar/Sidebar'
import Analitka from '../screens/analitka/Analitka'
import Loginscreens from '../screens/loginscreens/Loginscreens'
import Newpost from '../screens/new-post/Newpost'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/login" component={Loginscreens} />
                <div style={{ display: 'flex', flexDirection: 'row', flex: 1, width: "100%",overflow:'hidden' }}>
                    <Sidebar />
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'column',marginLeft:"14%" }}>
                        <NavBar />
                        <Route path="/newpost" component={Newpost} />
                        <Route path="/analitka" component={Analitka} />
                    </div>
                </div>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
