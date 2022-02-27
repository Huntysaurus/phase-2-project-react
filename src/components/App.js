import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Comments from "./Comments";
import ProfileCard from "./ProfileCard";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {

    
    return (
        <div>
            <Header />
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/profilecard">
                    <ProfileCard />
                </Route>
                <Route exact path="/comments">
                    <Comments />
                </Route>
            </Switch>
        </div>
    )
}

//   app
//    |
//   Home - Header - Profile - comments - NavBar
//    |
//   ProfileCards
export default App