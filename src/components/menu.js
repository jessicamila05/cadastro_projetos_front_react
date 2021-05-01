import React from 'react';
import { Navbar, 
    NavbarBrand, 
    Nav,
NavItem,
NavLink, } from 'reactstrap';
import './Menu.css';

export default function Menu(){
   return(
       <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
           <NavbarBrand className="navbar-brand" href="/">Genrenciador de Projetos</NavbarBrand>
           <Nav className="ml-auto" navbar>
               <NavItem className="d-flex aling-items-center">
                   <NavLink className="font-weigt-bold" href="/">
                       Home
                   </NavLink>
               </NavItem>
               <NavItem>
                    <NavLink className="font-weigt-bold" href="/users">
                       Users
                    </NavLink>
               </NavItem>
               <NavItem className="d-flex aling-items-center">
                   <NavLink className="font-weigt-bold" href="/projects">
                       Projects
                   </NavLink>
               </NavItem>
               <NavItem className="d-flex aling-items-center">
                   <NavLink className="font-weigt-bold" href="/userRegister">
                       Cadastrar Usuário
                   </NavLink>
               </NavItem>
           </Nav>
       </Navbar>
   );
   
}
