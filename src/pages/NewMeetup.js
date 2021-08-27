import NewMeetupForm from "../components/meetups/NewMeetupForm";

const apiURL = 'https://react-testing-4bc3a-default-rtdb.europe-west1.firebasedatabase.app/meetups.json';

function NewMeetupPage(props) {

    async function addMeetupHandler(meetupData) {
        await fetch(apiURL,
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                header: {
                    'Content-Type': 'application/json;'
                }
            }
        );

    }

    return (
        <section>
            <h1>Add a new Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>

    );
}

export default NewMeetupPage;