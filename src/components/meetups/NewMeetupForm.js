import {useRef} from 'react';

import Card from "../ui/Card.js";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }
        console.log(meetupData)
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="titleInput" ref={titleInputRef}>Meetup title:</label>
                    <input type="text" required id="titleInput"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="urlInput" ref={imageInputRef}>Meetup image url:</label>
                    <input type="text" required id="urlInput"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="addressInput" ref={addressInputRef}>Address:</label>
                    <input type="text" required id="addressInput"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="descriptionInput" ref={descriptionInputRef}>Description:</label>
                    <textarea id="description" required rows="5"/>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;