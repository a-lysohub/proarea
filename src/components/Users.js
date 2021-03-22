import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox,
    Button,
} from "@material-ui/core";
import EditUser from "./EditUser";
import { deleteUserData, updateUserData } from "../utils";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 700,
        marginTop: 80,
    },
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
}));

export default function Users(props) {
    const classes = useStyles();
    const handleUserEdit = (user, { name, age, isAdmin }) => {
        updateUserData(user.id, user.email, name, age, isAdmin);
        props.onUpdate(true);
    };

    const handleUserDelete = (user) => {
        deleteUserData(user.id);
        props.onUpdate(true);
    };
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="right">Email</StyledTableCell>
                        <StyledTableCell align="right">Age</StyledTableCell>
                        <StyledTableCell align="right">
                            Is Admin
                        </StyledTableCell>
                        {props.isAdmin && (
                            <StyledTableCell align="center"></StyledTableCell>
                        )}
                        {props.isAdmin && (
                            <StyledTableCell align="center"></StyledTableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.map((user) => (
                        <StyledTableRow key={user.email}>
                            <StyledTableCell component="th" scope="row">
                                {user.username}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {user.email}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {user.age}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <Checkbox
                                    color="default"
                                    checked={user.isAdmin}
                                ></Checkbox>
                            </StyledTableCell>
                            {props.isAdmin && (
                                <StyledTableCell align="right">
                                    <EditUser
                                        user={user}
                                        onEdit={(newUserData) => {
                                            handleUserEdit(user, newUserData);
                                        }}
                                    ></EditUser>
                                </StyledTableCell>
                            )}
                            {props.isAdmin && (
                                <StyledTableCell align="right">
                                    <Button
                                        className={classes.bttn}
                                        onClick={() => {
                                            handleUserDelete(user);
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </StyledTableCell>
                            )}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
