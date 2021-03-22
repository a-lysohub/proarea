import React from "react";
import {
    Button,
    Box,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    FormControlLabel,
    Checkbox,
    TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    bttn: {
        background: "linear-gradient(45deg, #a9abad 20%, #515253 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(81, 82, 83, .3)",
        color: "white",
        height: 28,
        padding: "0 30px",
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function EditUser(props) {
    const classes = useStyles();

    const [openEdit, setOpenEdit] = React.useState(false);
    const [name, setName] = React.useState(props.user.username);
    const [age, setAge] = React.useState(props.user.age);
    const [isAdmin, setIsAdmin] = React.useState(props.user.isAdmin);

    const closeDialogEdit = () => {
        setOpenEdit(false);
    };
    const openDialogEdit = () => {
        setOpenEdit(true);
    };
    const handleDoneClick = () => {
        props.onEdit({ name, age, isAdmin });
        closeDialogEdit();
    };

    return (
        <Box>
            <Button
                variant="contained"
                className={classes.bttn}
                onClick={openDialogEdit}
            >
                Edit
            </Button>
            <Dialog open={openEdit}>
                <DialogTitle>Edit</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Email Address"
                        type="email"
                        value={props.user.email}
                        fullWidth
                        disabled
                    />
                    <TextField
                        margin="dense"
                        label="Name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Age"
                        type="number"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                        fullWidth
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="default"
                                checked={isAdmin}
                                onClick={() => setIsAdmin(!isAdmin)}
                            />
                        }
                        label="Is admin"
                    />
                </DialogContent>
                <DialogActions>
                    <Button className={classes.bttn} onClick={handleDoneClick}>
                        Done
                    </Button>
                    <Button className={classes.bttn} onClick={closeDialogEdit}>
                        {" "}
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
