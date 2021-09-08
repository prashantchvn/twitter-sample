import React from 'react'
import {Link} from "react-router-dom";
import logo from "../logo.svg"
function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="toggle-navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar-content">
                    <ul class="navbar-nav link">
                    <li class="nav-item">
                    <Link to="/home" class="nav-link links"><li>Home</li></Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link links" href="#">Contacts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link links" href="#">Blogs</a>
                    </li>
                    <li class="nav-item">
                    <Link to="/sign-up" class="nav-link links"><li>sign-up</li></Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/login" class="nav-link links"><li>Login</li></Link>
                    </li>
                    
                    </ul>
                </div>
            </nav>
    </div>
    )
}

export default Navbar
