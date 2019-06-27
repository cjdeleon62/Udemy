import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
	/**
	 * Renders error components
	 * @param {string} meta.error The error message for a form element.
	 * @param {string} meta.touched  True of the form element was focused and then unfocused.
	 * @returns {JSX} Error message elements.
	 */
	renderError = ({ error, touched }) => {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			)
		}
	}

	/**
	 * Renders the input elements in the form.
	 * @param {Object} formProps.input All of the functions and properties provided by redux form needed to handle various input events when interacting with the element.
	 * @param {string} formProps.label The label text for the input element to render.
	 * @param {Object} formProps.meta The meta data of the input provided by redux form.
	 * @returns {JSX} The configured input element for the form. 
	 */
	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	}

	/**
	 * Access the data from the form when the handleSubmit callback is invoked from the form.
	 * @param {Object} formValues The values from the current form that will be sent.
	 */
	onSubmit = formValues => {
		this.props.createStream(formValues);
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
				<Field name="title" component={this.renderInput} label="Enter Title" />
				<Field name="description" component={this.renderInput} label="Enter Description" />
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

/**
 * Checks and performs validation on the form values. Occurs on initial render and any time there is user interaction with the form.
 * @param {Object} formValues The values provided from redux form containing the data from the form.
 * @returns {Object} The various error messages corresponding to the name property on the various elements in the form.
 */
const validate = (formValues) => {
	const errors = {};

	if (!formValues.title) {
		errors.title = 'You must enter a title';
	}

	if (!formValues.description) {
		errors.description = 'You must enter a description';
	}

	return errors;
};

const formWrapped = reduxForm({
	form: 'streamCreate',
	validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
