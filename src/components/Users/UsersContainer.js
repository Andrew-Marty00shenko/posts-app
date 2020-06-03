import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../redux/users-reducer'
import Users from './Users'

const UsersContainer = props => {
    useEffect(() => {
        props.getUsers();
    }, [])

    return (
        <Users users={props.users} />
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

export default connect(mapStateToProps, { getUsers })(UsersContainer)