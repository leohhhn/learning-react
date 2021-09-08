import Card from "../components/ui/Card";
import classes from "../components/meetups/NewMeetupForm.module.css";

function SecretVault(props) {


    const handleSubmit = (event) => {
        event.preventDefault();
    }



    return (
        <Card>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.control}>
                    <label>Key 1:</label>
                    <input
                        type="password"
                        required id="titleInput"
                        placeholder="X coordinate"
                    />

                    <input
                        type="password"
                        required id="titleInput"
                        placeholder="Y coordinate"
                    />

                </div>
                <div className={classes.control}>
                    <label>Key 2:</label>
                    <input
                        type="password"
                        required id="titleInput"
                        placeholder="X coordinate"
                    />

                    <input
                        type="password"
                        required id="titleInput"
                        placeholder="Y coordinate"
                    />
                </div>
                <div className={classes.control}>
                    <label>Key 3:</label>
                    <input
                        type="password"
                        required id="titleInput"
                        placeholder="X coordinate"
                    />

                    <input
                        type="password"
                        required id="titleInput"
                        placeholder="Y coordinate"
                    />
                </div>
                <div className={classes.control}>
                    <label>Key 4:</label>
                    <input
                        type="password"
                        required id="titleInput"
                        placeholder="X coordinate"
                    />
                    <input
                        type="password"
                        required id="titleInput"
                        placeholder="Y coordinate"
                    />
                </div>
                <div className={classes.actions}>
                    <button>Unlock Vault</button>
                </div>
            </form>
    </Card>);
}

export default SecretVault;