import MeetupList from '../components/meetups/MeetupList.js';
import {useState, useEffect, useContext} from "react";
import Web3Context from "../store/web3-context";

const apiURL = 'https://react-testing-4bc3a-default-rtdb.europe-west1.firebasedatabase.app/meetups.json';

function AllMeetupsPage(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    let Web3Ctx = useContext(Web3Context);
    let currentAccount = Web3Ctx.currentAccount;

    useEffect(() => {
        setIsLoading(true);
        fetch(apiURL).then(response => {
            return response.json();
        }).then(data => {
            const meetups = [];
            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }
            setLoadedMeetups(meetups);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <section>
            <p>Loading all Meetups...</p>
        </section>
    }


    return <section>
        <h1>Meetups</h1>
        {currentAccount !== null ?
        <h2>Hello, {currentAccount}</h2> : <h2>Please connect with MetaMask above.</h2>}
        <MeetupList meetups={loadedMeetups}/>
    </section>;
}

export default AllMeetupsPage;