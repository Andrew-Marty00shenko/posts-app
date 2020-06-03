import React from 'react'
import './Profile.scss'
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import UsersContainer from '../Users/UsersContainer';


const Profile = (props) => {

    return (
        <div className="wr">
            <div className="profile">
                <div className="profile-title">
                    <h1>This is your ProfilePage</h1>
                </div>
                <div className="profile-info">
                    <div className="profile-info__user">
                        <h2>NAME: {props.profile ? props.profile.user.name : null}  </h2>
                    </div>
                    <Button variant="contained" color="primary">
                        <NavLink to="/profile/posts">show my posts</NavLink>
                    </Button>
                </div>
            </div>
            <UsersContainer />
        </div>
    )
}

export default Profile;