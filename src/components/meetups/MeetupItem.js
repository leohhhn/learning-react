import classes from './MeetupItem.module.css';
import Card from '../ui/Card.js';
import {useContext} from 'react';
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext);

    const isFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (isFavorite) {
            favoritesCtx.removeFavorite(props.id)
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                images: props.images,
                address: props.address
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                    <p>Owner of event: {props.owner}</p>
                </div>
                <div className={classes.actions}>
                    <button
                        onClick={toggleFavoriteStatusHandler}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;