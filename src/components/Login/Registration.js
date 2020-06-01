import React from 'react';
import './Registration.scss'
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { userRegist } from '../../redux/auth-reducer';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { required } from '../utils/validators';
import { Input } from '../../Common/FormControls/FormControls'

const Registration = (props) => {
    const onSubmit = (formData) => {
        props.userRegist(formData.name, formData.email, formData.password);
    }

    return (
        <div className="registration">
            <h1>Registration</h1>
            <NavLink to='/'>SignIn</NavLink>
            <ReduxRegistrationForm onSubmit={onSubmit} />
        </div>
    )
}

const RegistrationForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} placeholder="name*" name="name" validate={[required]} />
            </div>
            <div>
                <Field component={Input} type="email*" placeholder="email" name="email" validate={[required]} />
            </div>
            <div>
                <Field component={Input} type="password" placeholder="password*" name="password" validate={[required]} />
            </div>
            <Button variant="contained" type="submit">
                SignUp
                </Button>
        </form>
    )
}

const ReduxRegistrationForm = reduxForm({ form: "registration" })(RegistrationForm)

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { userRegist })(Registration)