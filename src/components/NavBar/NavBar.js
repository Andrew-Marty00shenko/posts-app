import React from 'react'
import './NavBar.scss'
import { NavLink } from 'react-router-dom'

import Logo from '../../assets/facebook.svg'
import SearchIcon from '../../assets/search.svg'
import HomeIcon from '../../assets/home.svg'
import PostIcon from '../../assets/posts.svg'
import { connect } from 'react-redux'

const NavBar = (props) => {
    return (
        <ul className="navbar">
            <div className="navbar-logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="navbar-filter">
                <input type="text" placeholder="Search here" />
                <img src={SearchIcon} alt="search" />
            </div>
            <div className="navbar-links">
                <li className="navbar-links__home">
                    <NavLink to="/profile">
                        <img src={HomeIcon} alt="home" />
                    </NavLink>
                </li>
                <li className="navbar-links__posts">
                    <NavLink to="/profile/posts">
                        <img src={PostIcon} alt="posts" />
                    </NavLink>
                </li>
                <li className="navbar-links__profile">
                    <NavLink to='/profile'>{props.profile ? props.profile.user.name : null}</NavLink>
                </li>
            </div>
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, null)(NavBar)