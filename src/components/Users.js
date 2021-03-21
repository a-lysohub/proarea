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
} from "@material-ui/core";
import EditUser from "./EditUser";
import { updateUserData } from "../utils";

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

const useStyles = makeStyles({
    table: {
        minWidth: 700,
        marginTop: 80,
    },
});

export default function Users(props) {
    const classes = useStyles();
    const handleUserEdit = (user, { name, age, isAdmin }) => {
        updateUserData(user.id, user.email, name, age, isAdmin);
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
                            <StyledTableCell align="right"></StyledTableCell>
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
                                            handleUserEdit(
                                                user,
                                                newUserData
                                            );
                                        }}
                                    ></EditUser>
                                </StyledTableCell>
                            )}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
