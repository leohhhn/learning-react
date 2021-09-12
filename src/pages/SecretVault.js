import Card from "../components/ui/Card";
import classes from "../components/meetups/NewMeetupForm.module.css";
import {useEffect, useState} from "react";
import {initializeZokratesProvider, unlockVault} from "../components/zkp/zok";

function SecretVault() {

    const [inputs, setInputs] = useState({
        x0: "",
        y0: "",
        x1: "",
        y1: "",
        x2: "",
        y2: "",
        x3: "",
        y3: "",
    });

    const [vaultLoading, setVaultLoading] = useState(true);

    useEffect(() => {
        setVaultLoading(true);
        initializeZokratesProvider().then(
            // todo fix loading only once
            setVaultLoading(false)
        );

    }, []);


    const handleChange = (evt) => {
        const value = evt.target.value;
        setInputs({
            ...inputs,
            [evt.target.name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
        // todo get inputs and forward them to Zokrates

    }

    if (vaultLoading) {
        // todo fix
        return (<Card>
            <div><p>Vault is loading...</p></div>
        </Card>);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.control}>
                    <label>Key 1:</label>
                    <input
                        type="password"
                        placeholder="X coordinate"
                        value={inputs.x0}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Y coordinate"
                        value={inputs.y0}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.control}>
                    <label>Key 2:</label>
                    <input
                        type="password"
                        placeholder="X coordinate"
                        value={inputs.x1}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Y coordinate"
                        value={inputs.y1}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.control}>
                    <label>Key 3:</label>
                    <input
                        type="password"
                        placeholder="X coordinate"
                        value={inputs.x2}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Y coordinate"
                        value={inputs.y2}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.control}>
                    <label>Key 4:</label>
                    <input
                        type="password"
                        placeholder="X coordinate"
                        value={inputs.x3}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Y coordinate"
                        value={inputs.y3}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.actions}>
                    <button>Unlock Vault</button>
                </div>
            </form>
        </Card>);
}

export default SecretVault;