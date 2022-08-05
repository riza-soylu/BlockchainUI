import { useWeb3React } from "@web3-react/core";
import { useState, useEffect } from 'react';

function MetaMask(){
    const [haveMetamask, sethaveMetamask] = useState(true);

    useEffect(() => {
        const { ethereum } = window;
        const checkMetamaskAvailability = async () => {
        if (!ethereum) {
            sethaveMetamask(false);
        }
        sethaveMetamask(true);
        };
        checkMetamaskAvailability();
    }, []);

    const [accountAddress, setAccountAddress] = useState('');
    const [isConnected, setIsConnected] = useState(false);

    const { ethereum } = window;
    const connectWallet = async () => {
        try {
        if (!ethereum) {
            sethaveMetamask(false);
        }
        const accounts = await ethereum.request({
            method: 'eth_requestAccounts',
        });
        setAccountAddress(accounts[0]);
        setIsConnected(true);
        } catch (error) {
            setIsConnected(false);
        }
    };

    return(
        <>
            { isConnected == false &&
                <button type="button" className="btn btn-warning" onClick={connectWallet}>Connect Wallet</button>
            }
            { isConnected && 
                <span className="btn btn-warning">{accountAddress}</span>
            }
        </>
    );
}

export default MetaMask;