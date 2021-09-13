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
        y3: ""
    });

    const [vaultLoading, setVaultLoading] = useState(true);

    useEffect(() => {
        setVaultLoading(true);
        initializeZokratesProvider().then(() => {
            setVaultLoading(false)
        });
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

        const t = {
            x0: "1",
            y0: "1028377",
            x1: "2",
            y1: "1028592",
            x2: "3",
            y2: "1029155",
            x3: "4",
            y3: "1030234"
        }

        unlockVault(Object.values(t));

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
                        name={"x0"}
                        type="password"
                        placeholder="X coordinate"
                        value={inputs.x0}
                        onChange={handleChange}
                    />
                    <input
                        name={"y0"}
                        type="password"
                        placeholder="Y coordinate"
                        value={inputs.y0}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.control}>
                    <label>Key 2:</label>
                    <input
                        name={"x1"}
                        type="password"
                        placeholder="X coordinate"
                        value={inputs.x1}
                        onChange={handleChange}
                    />
                    <input
                        name={"y1"}
                        type="password"
                        placeholder="Y coordinate"
                        value={inputs.y1}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.control}>
                    <label>Key 3:</label>
                    <input
                        name={"x2"}
                        type="password"
                        placeholder="X coordinate"
                        value={inputs.x2}
                        onChange={handleChange}
                    />
                    <input
                        name={"y2"}
                        type="password"
                        placeholder="Y coordinate"
                        value={inputs.y2}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.control}>
                    <label>Key 4:</label>
                    <input
                        name={"x3"}
                        type="password"
                        placeholder="X coordinate"
                        value={inputs.x3}
                        onChange={handleChange}
                    />
                    <input
                        name={"y3"}
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