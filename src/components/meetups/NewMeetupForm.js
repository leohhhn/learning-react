import {useState} from 'react';

import Card from "../ui/Card.js";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
    const [values, setValues] = useState({
        title: 'Meetup in Belgrade',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Milice Carice 2',
        description: 'lMAO Very cool event you should come'
    });

    const [submitted, setSubmitted] = useState(false);

    const handleTitleChange = (evt) => {
        setValues({...values, title: evt.target.value});
    }
    const handleUrlChange = (evt) => {
        setValues({...values, url: evt.target.value});
    }
    const handleAddressChange = (evt) => {
        setValues({...values, address: evt.target.value});
    }
    const handleDescriptionChange = (evt) => {
        setValues({...values, description: evt.target.value});
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSubmitted(true);
        props.onAddMeetup(values);

        setValues({
            title: '',
            url: '',
            address: '',
            description: ''
        });
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.control}>
                    <label htmlFor="titleInput">Meetup title:</label>
                    <input
                        type="text"
                        value={values.title}
                        onChange={handleTitleChange}
                        required id="titleInput"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="urlInput">Meetup image url:</label>
                    <input
                        type="text"
                        value={values.url}
                        onChange={handleUrlChange}
                        required id="urlInput"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="addressInput">Address:</label>
                    <input
                        type="text"
                        value={values.address}
                        onChange={handleAddressChange}
                        required id="addressInput"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="descriptionInput">Description:</label>
                    <textarea
                        id="description"
                        value={values.description}
                        onChange={handleDescriptionChange}
                        required rows="5"/>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
                {submitted ? <p>New Meetup successfully created! Nice.</p> : null}
            </form>
        </Card>
    );
}

export default NewMeetupForm;