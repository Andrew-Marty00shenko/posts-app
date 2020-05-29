import React from 'react'
import './Profile.scss'
import Button from '@material-ui/core/Button';

const Profile = (props) => {
    return (
        <div className="profile">
            <div className="profile-title">
                <h1>This is your ProfilePage</h1>
            </div>
            <div className="profile-info">
                <div className="profile-photo"></div>
                <div className="profile-info__user">
                    <h2>NAME: </h2>
                </div>
                <Button variant="contained" color="primary">
                    Show my posts
                </Button>
            </div>

        </div>
    )
}

export default Profile;