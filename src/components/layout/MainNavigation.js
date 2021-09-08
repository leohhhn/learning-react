import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css';
import {useContext} from "react";
import Web3Context from "../../store/web3-context";

function MainNavigation(props) {

    let Web3Ctx = useContext(Web3Context);

    function connectMetamaskHandler() {
        Web3Ctx.connectMetaMask();
    }

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <button
                            onClick={connectMetamaskHandler}>{Web3Ctx.isMetaMaskConnected ? 'Connected!' : 'Connect MetaMask'}</button>
                    </li>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorite Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Create a Meetup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;