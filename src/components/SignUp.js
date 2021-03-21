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
import { addUser, createUserData } from "../utils";

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
    },
}));

export default function SignUp(props) {
    const classes = useStyles();

    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState("");
    const [password1, setPassword1] = React.useState("");
    const [password2, setPassword2] = React.useState("");
    const [error, setError] = React.useState("");

    const handleSignUpClick = () => {
        if (password1 === password2 && password1 !== "") {
            addUser(email, password1)
                .then(() => {
                    return createUserData(name, email, age, false);
                })
                .then(() => {
                    props.onSuccess(email);
                })
                .catch((error) => {
                    setError(error.message); //text message
                });
        } else {
            setError("check passwords failed");
        }
    };

    return (
        <Box>
            <Button
                variant="contained"
                className={classes.bttn}
                onClick={props.openDialogSU}
            >
                Sign Up
            </Button>
            <Dialog open={props.openSignUp} onClose={props.closeDialogSU}>
                <DialogTitle>Sign Up</DialogTitle>
                <DialogContent>
                    <span className={classes.errorMessage}>{error}</span>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Email Address"
                        type="email"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Name"
                        type="text"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Password"
                        type="password"
                        value={password1}
                        onChange={(event) => {
                            setPassword1(event.target.value);
                        }}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Repeat Password"
                        type="password"
                        value={password2}
                        onChange={(event) => {
                            setPassword2(event.target.value);
                        }}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Age"
                        type="number"
                        value={age}
                        onChange={(event) => {
                            setAge(event.target.value);
                        }}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleSignUpClick}
                        className={classes.bttn}
                    >
                        {" "}
                        Done
                    </Button>
                    <Button
                        onClick={props.closeDialogSU}
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