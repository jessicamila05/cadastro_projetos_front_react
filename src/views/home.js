import React, { Fragment } from "react";
//import {Link} from "react-router-dom";
import Menu from '../components/menu';
import Login from './login'
export default function Home(){
    return(
        <Fragment>
             <Menu />
                <div className="container">
                    <Login />
                </div>
        </Fragment>  

    );        
}