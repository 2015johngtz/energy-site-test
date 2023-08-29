import React, { Component } from 'react';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import { NavLink } from 'react-router-dom'
import '../components/Home/HomeStyles.scss'

export function NavBar(props){
        return (
            <div>
                <nav class="nav navbar navbar-expand-sm navbar-light">
                    <a class="navbar-brand" href="#" style={{ marginRight: '60px',marginLeft: '40px',marginTop: '16px' }}>
                        <img src={require("../assets/imgs/logo.png")}  />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse ul-div" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <NavLink to='/home' className="nav-link"
                                 activeClassName="active">Home</NavLink>
                            </li>
                            <li class="nav-item dropdown">
                            <NavLink to='/serviceAreas' className="nav-link dropdown-toggle"
                             id="navbarDropdown" role="button" data-toggle="dropdown" 
                            aria-haspopup="true" aria-expanded="true" 
                            activeClassName="active">Service Areas</NavLink>
                            
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="/providers" 
                                id="navbarDropdown" role="button" data-toggle="dropdown" 
                                aria-haspopup="true" aria-expanded="false" activeClassName="active">
                                    Providers
                                  </NavLink>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/utilities" activeClassName="active">
                                    Utilities</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/resources" activeClassName="active">
                                    Resources</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/aboutUs" activeClassName="active">
                                    About Us</NavLink>
                            </li>
                        </ul>
                        <div className="nav_contact">
                            <Feather
                                name="phone-call"
                                color='black'
                                className="phone-call"
                                size={15}
                            />
                            <h6 className="nav_number"> 1(956)598-3250</h6>
                        </div>

                    </div>
                </nav>
            </div>
        );
}

