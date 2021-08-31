import {useContext} from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage(props) {

    const favoritesCtx = useContext(FavoritesContext);

    let content = favoritesCtx.totalFavorites === 0 ? 'No favorites yet!' :
        <MeetupList meetups={favoritesCtx.favorites}/>;

    return <section>
        <h1>My Favorites</h1>
        {content}
    </section>
}

export default FavoritesPage;