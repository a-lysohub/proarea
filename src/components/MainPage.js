import React from "react";
import {
    AppBar,
    Button,
    Container,
    Toolbar,
    IconButton,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Users from "./Users";
import { getAllUsers } from "../utils";

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
    root: {
        flexGrow: 1,
    },
    toolBar: {
        background: "linear-gradient(45deg, #515253 20%, #a9abad 90%)",
    },
}));

export default function MainPage(props) {
    const classes = useStyles();

    const [users, setUsers] = React.useState([]);
    const [shouldUpdate, setShouldUpdate] = React.useState(true);
    React.useEffect(() => {
        if (shouldUpdate) {
            getAllUsers().then(setUsers);
            setShouldUpdate(false);
        }
    }, [shouldUpdate]);

    const isAdmin = users.find((user) => {
        return props.email === user.email;
    })?.isAdmin;

    return (
        <Container fixed>
            <AppBar className={classes.toolBar} position="fixed">
                <Container fixed>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title}>
                            ProArea Company
                        </Typography>
                        <Button
                            className={classes.bttn}
                            onClick={props.onLogOut}
                        >
                            Sign Out
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container className={classes.table}>
                <Users
                    isAdmin={isAdmin}
                    users={users}
                    onUpdate={setShouldUpdate}
                ></Users>
            </Container>
        </Container>
    );
}
