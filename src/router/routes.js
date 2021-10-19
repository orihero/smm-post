import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import NavBar from '../components/navigation/navbar/NavBar'
import Sidebar from '../components/navigation/sidebar/Sidebar'
import Analitka from '../screens/analitka/Analitka'
import Loginscreens from '../screens/loginscreens/Loginscreens'
import Newpost from '../screens/new-post/Newpost'
import Publications from '../screens/Publications/Publications'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/login" component={Loginscreens} />
                <div style={{ display: 'flex', flexDirection: 'row', flex: 1, width: "100%", overflow: 'hidden' }}>
                    <Sidebar />
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginLeft: "14%", }}>
                        <NavBar />
                        <Switch>
                            <Route exact path="/newpost" component={Newpost} />
                            <Route exact path="/analytics" component={Analitka} />
                            <Route exact path="/publications" component={Publications} />
                        </Switch>
                    </div>
                </div>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
