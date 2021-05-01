import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../views/home";
import ListProjects from "../views/listProjects";
import ListUsers from "../views/listUsers";
import User from "../views/user";
import UserRegister from "../views/userRegister"

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/users"  component={ListUsers} />
                <Route path="/projects"  component={ListProjects} />
                <Route path="/userRegister"  component={UserRegister} />
                <Route path="/user"  component={User} />
            </Switch>
        </BrowserRouter>

    );
        
}