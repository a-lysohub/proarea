import React from "react";
import {
    Button,
    Box,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { loginUser } from "../utils";

const useStyles = makeStyles((theme) => ({
    bttn: {
        background: "linear-gradient(45deg, #a9abad 20%, #515253 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(81, 82, 83, .3)",
        color: "white",
        height: 34,
        padding: "0 30px",
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
    errorMessage: {
        color: "red",
    }
}));

export default function SignIn(props) {
    const classes = useStyles();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const handleLoginClick = () => {
        if (email !== "" && password !== "") {
            loginUser(email, password)
                .then(() => {
                    props.onSuccess(email);
                })
                .catch((error) => {
                    setError(error.message); //text message
                });
        }
    };

    return (
        <Box>
            <Button
                variant="contained"
                className={classes.bttn}
                onClick={props.openDialogSI}
            >
                Sign In
            </Button>
            <Dialog open={props.openSignIn} onClose={props.closeDialogSI}>
                <DialogTitle>Log in</DialogTitle>
                <DialogContent>
                    <span className={classes.errorMessage}>{error}</span>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Email Address"
                        type="email"
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Password"
                        type="password"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button className={classes.bttn} onClick={handleLoginClick}>
                        Done
                    </Button>

                    <Button
                        onClick={props.closeDialogSI}
                        className={classes.bttn}
                    >
                        {" "}
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
