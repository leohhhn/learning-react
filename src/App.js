import {Route, Switch} from 'react-router-dom';

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/FavoriteMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";
import SecretVault from "./pages/SecretVault";

function App() {
    return (
        <Layout>
            <Switch>
                <Route Route path='/vault' >
                    <SecretVault/>
                </Route>
                <Route path='/' exact>
                    <AllMeetupsPage/>
                </Route>
                <Route path='/favorites'>
                    <FavoritesPage/>
                </Route>
                <Route path='/new-meetup'>
                    <NewMeetupPage/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
