import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class Nav extends Component {
    render(){
        return (
            <div className={"Nav"}>
                <nav>
                    <ul className='nav-links'>
                        <li><NavLink to="/"> Home </NavLink></li>
                        <li><NavLink to="/login"> Login </NavLink></li>
                        <li><NavLink to="/signup"> Signup </NavLink></li>
                        <li><NavLink to="/about"> About </NavLink></li>
                        <li><NavLink to="/dashboard"> Dash</NavLink></li>
                        <li><NavLink to="/user"> User </NavLink></li>
                        <li><NavLink to="/contact"> Contact </NavLink></li>
                        <li><NavLink to="/classmates"> Classmate </NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}