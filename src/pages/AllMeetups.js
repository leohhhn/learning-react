import MeetupList from '../components/meetups/MeetupList.js';
import {useState, useEffect} from "react";

const apiURL = 'https://react-testing-4bc3a-default-rtdb.europe-west1.firebasedatabase.app/meetups.json';

function AllMeetupsPage(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        fetch(apiURL).then(response => {
            return response.json();
        }).then(data => {
            const meetups = [];
            for (const key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }

            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    }, []);

    if (isLoading) {
        return <section>
            <p>Loading all Meetups...</p>
        </section>
    }


    return <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups}/>
    </section>;
}

export default AllMeetupsPage;