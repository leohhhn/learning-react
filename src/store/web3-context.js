import {createContext, useState} from "react";
import Web3 from 'web3';


const Web3Context = createContext({
    isMetaMaskConnected: false,
    currentAccount: null,
    connectMetaMask: () => {
    }
});

export function Web3ContextProvider(props) {

    let accounts;
    const [connectedMM, setConnectedMM] = useState(false);
    const [currentUserAccount, setCurrentUserAccount] = useState(null);

    window.ethereum.on('accountsChanged', function (accounts) {
        setCurrentUserAccount(accounts[0]);
    });

    async function connectMetaMaskHandler() {
        if (typeof window.ethereum !== 'undefined') {

            accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });

            setConnectedMM(true);
            setCurrentUserAccount(accounts[0]);

        } else {
            alert("Please install MetaMask to use this app.");
        }
    }

    const context = {
        isMetaMaskConnected: connectedMM,
        currentAccount: currentUserAccount,
        connectMetaMask: connectMetaMaskHandler
    }

    return <Web3Context.Provider value={context}>
        {props.children}
    </Web3Context.Provider>
}

export default Web3Context;