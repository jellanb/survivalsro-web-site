import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import AccountActionsButton from "./AccountActionsButton";
import React from "react";


export default function MobileControlAccount({isSingIn, username, silk}){
    return(
        // eslint-disable-next-line no-mixed-operators
        isSingIn === false || isSingIn === undefined && username !== null
            ? <Button variant='outlined' color="inherit">
                <Link style={{ textDecoration: 'none', color: 'black'}} to='/singIn'>Login</Link>
            </Button>
            : <AccountActionsButton username={username} silk={silk}/>
    )
}
