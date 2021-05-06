import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../views/home";
import ListProjects from "../views/projects.js/listProjects";
import ListUsers from "../views/listUsers";
import UserRegister from "../views/userRegister"

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/users"  component={ListUsers} />
                <Route path="/projects"  component={ListProjects} />
                <Route path="/userRegister"  component={UserRegister} />
            </Switch>
        </BrowserRouter>

    );
        
}