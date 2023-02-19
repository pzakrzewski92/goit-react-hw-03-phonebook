import React, { Component } from "react";
import PropTypes from "prop-types";

import css from "./ContactForm.module.css";

class ContactForm extends Component {
    state = {
        name: "",
        number: "",
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.resetForm();
    };

    resetForm = () => {
        this.setState(() => ({
            name: "",
            number: "",
        }));
    };

    render() {
        const { name, number } = this.state;
        return (
            <>
                <form className={css.form} onSubmit={this.handleSubmit}>
                    <label className={css.label}>
                        Name
                        <input
                            className={css.input}
                            autoComplete="off"
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            value={name}
                            onChange={this.handleInputChange}
                            placeholder="e.g. John Doe"
                            required
                        />
                    </label>
                    <label className={css.label}>
                        Number
                        <input
                            className={css.input}
                            autoComplete="off"
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            value={number}
                            onChange={this.handleInputChange}
                            placeholder="e.g. 561-431-233"
                            required
                        />
                    </label>
                    <button className={css.button} type="submit">
                        Add contact
                    </button>
                </form>
            </>
        );
    }
}

ContactForm.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;