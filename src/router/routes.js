import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import NavBar from "../components/navigation/navbar/NavBar";
import Sidebar from "../components/navigation/sidebar/Sidebar";
import Analytics from "../screens/analytics/Analytics";
import Education from "../screens/education/Education";
import EducationThree from "../screens/education/EducationThree";
import EducationTwo from "../screens/education/EducationTwo";
import Help from "../screens/help/Help";
import Instruments from "../screens/Instruments/Instruments";
import Loginscreens from "../screens/loginscreens/Loginscreens";
import Register from "../screens/loginscreens/registerpage/Register";
import Newpost from "../screens/new-post/Newpost";
import PlansScrens from "../screens/plans/PlansScrens";
import Profile from "../screens/profile/Profile";
import ProfileChangePassword from "../screens/profile/ProfileChangePassword";
import Publications from "../screens/Publications/Publications";
import Settings from "../screens/settings/Settings";
import Moredetails from "../screens/what'snew/moredetails/Moredetails";
import Whatsnew from "../screens/what'snew/Whatsnew";
import Drafts from "../screens/Publications/Drafts/Drafts"

let routes = [
  { key: "Новый пост", path: "/newpost", component: Newpost },
  { key: "Публикации", path: "/publications", component: Publications },
  { key: "Публикации", path: "/drafts", component: Drafts },
  { key: "Аналитика", path: "/analytics", component: Analytics },
  { key: "Инструменты", path: "/instruments", component: Instruments },
  { key: "Настройки", path: "/settings", component: Settings },
  { key: "Мой профиль", path: '/profile', component: Profile },
  { key: "Оплатить", path: '/plans', component: PlansScrens },
  { key: "Обучение", path: '/education', component: Education },
];

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Loginscreens} />
        <Route path="/register" component={Register} />
        <Route path="/whatsnew" component={Whatsnew} />
        <Route path="/moredetails" component={Moredetails} />
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
              marginLeft: "212px",
            }}
          >
            <NavBar routes={routes} />
            <Switch>
              {routes.map((e) => (
                <Route exact {...e} />
              ))}
            </Switch>
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
