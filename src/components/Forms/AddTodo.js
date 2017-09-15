import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

const validate = values => {
    const errors = {};

    if (!values.todo) {
        errors.todo = true;
    }

    return errors;
};

const renderField = ({ input, placeholder, type, meta: { touched, error } }) => (
    <div className={'form-group ' + ((touched && error) ? 'has-error' : '')}>
        <input className="form-control"
               type={type}
               placeholder={placeholder}
               {...input}/>
    </div>
);

renderField.propTypes = {
    input: PropTypes.any,
    placeholder: PropTypes.any,
    required: PropTypes.bool,
    type: PropTypes.any,
    meta: PropTypes.any
};

class AddTodoForm extends Component {
    render () {
        const {
            handleSubmit,
            submitAction,
            submitting
        } = this.props;

        return (
            <form className="form-inline"
                  onSubmit={handleSubmit(submitAction)}
                  method="post" noValidate>
                <Field
                    name="todo"
                    type="text"
                    placeholder="Add things to do!"
                    component={renderField}
                />
                <button type="submit"
                        className="btn btn-default"
                        disabled={submitting}>
                    <i className="glyphicon glyphicon-plus-sign"/>
                </button>
            </form>
        );
    }
}

AddTodoForm.propTypes = {
    submitAction: PropTypes.func.isRequired,
    submitting: PropTypes.bool,
    handleSubmit: PropTypes.func
};

export default reduxForm({
    form: 'addTodo',
    validate
})(AddTodoForm);
