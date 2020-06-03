import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom'
import Profile from './Profile'

const ProfileContainer = (props) => {

    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) userId = "2fabfb50-a5e7-11ea-adb2-23f68a72f2ec";
        props.getUserProfile(userId);
    }, [])

    return <Profile {...props} profile={props.profile} />
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter
)(ProfileContainer)