import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NavBar from "../components/navigation/navbar/NavBar";
import Sidebar from "../components/navigation/sidebar/Sidebar";
import Analytics from "../screens/analytics/Analytics";
import Education from "../screens/education/Education";
import EducationTwo from "../screens/education/EducationTwo";
import Help from '../screens/help/Help';
import Instruments from "../screens/Instruments/Instruments";
import Loginscreens from "../screens/loginscreens/Loginscreens";
import Register from "../screens/loginscreens/registerpage/Register";
import Newpost from "../screens/new-post/Newpost";
import PlansScrens from "../screens/plans/PlansScrens";
import Profile from "../screens/profile/Profile";
import ProfileChangePassword from "../screens/profile/ProfileChangePassword";
import Publications from "../screens/Publications/Publications";
import Settings from "../screens/settings/Settings";
import Education from "../screens/education/Education";
import EducationTwo from "../screens/education/EducationTwo";
import EducationThree from "../screens/education/EducationThree";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/login" />
                <Route path="/login" component={Loginscreens} />
                <Route path="/register" component={Register} />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flex: 1,
                        width: "100%",
                        overflow: "hidden",
                    }}
                >
                    <Sidebar />
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                            flexDirection: "column",
                            marginLeft: "14%",
                        }}
                    >
                        <NavBar />
                        <Switch>
                            <Route exact path="/newpost" component={Newpost} />
                            <Route exact path="/analytics" component={Analytics} />
                            <Route exact path="/publications" component={Publications} />
                            <Route exact path="/instruments" component={Instruments} />
                            <Route exact path="/settings" component={Settings} />
                            <Route exact path="/help" component={Help} />
                            <Route exact path="/profile" component={Profile} />
                            <Route exact path="/changePassword" component={ProfileChangePassword} />
                            <Route exact path="/plans" component={PlansScrens} />
                            <Route exact path="/education" component={Education} />
                            <Route exact path="/educationtwo" component={EducationTwo} />
                            <Route exact path="/educationthree" component={EducationThree} />
                        </Switch>
                    </div>
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
