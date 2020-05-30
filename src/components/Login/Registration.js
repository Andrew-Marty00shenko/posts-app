import React from 'react';
import './Registration.scss'
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { registration } from '../../redux/auth-reducer';

const Registration = (props) => {

    const onSubmit = (formData) => {
        props.registration(formData.name, formData.email, formData.password);
    }

    return (
        <div className="registration">
            <h1>Registration</h1>
            <ReduxRegistrationForm onSubmit={onSubmit} />
        </div>
    )
}

const RegistrationForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label>Name:</label>
                <Field component="input" placeholder="name" name="name" />
            </div>
            <div>
                <label>Email:</label>
                <Field component="input" type="email" placeholder="email" name="email" />
            </div>
            <div>
                <label>Password:</label>
                <Field component="input" type="password" placeholder="password" name="password" />
            </div>
            <button>registrate</button>
        </form>
    )
}

const ReduxRegistrationForm = reduxForm({ form: "registration" })(RegistrationForm)

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { registration })(Registration)