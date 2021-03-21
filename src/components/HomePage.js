import React from "react";
import {
    Container,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    toolBar: {
        background: "linear-gradient(45deg, #515253 20%, #a9abad 90%)",
    },
}));

export default function HomePage(props) {
    const classes = useStyles();

    const [openSignIn, setOpenSignIn] = React.useState(false);
    const [openSignUp, setOpenSignUp] = React.useState(false);

    const handleSuccess = (currEmail) => {
        props.onLogIn(currEmail);
    };
    const openDialogSI = () => {
        setOpenSignIn(true);
    };
    const closeDialogSI = () => {
        setOpenSignIn(false);
    };

    const openDialogSU = () => {
        setOpenSignUp(true);
    };
    const closeDialogSU = () => {
        setOpenSignUp(false);
    };

    return (
        <AppBar className={classes.toolBar} position="fixed">
            <Container fixed>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title}>
                        ProArea Company
                    </Typography>
                    <SignIn
                        openSignIn={openSignIn}
                        openDialogSI={openDialogSI}
                        closeDialogSI={closeDialogSI}
                        onSuccess={handleSuccess}
                    ></SignIn>
                    <SignUp
                        openSignUp={openSignUp}
                        openDialogSU={openDialogSU}
                        closeDialogSU={closeDialogSU}
                        onSuccess={handleSuccess}
                    ></SignUp>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
