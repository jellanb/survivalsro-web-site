import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import AccountActionsButton from "./AccountActionsButton";

export default function ControlAccount({ isSingIn, username, silk }){

    return(
        // eslint-disable-next-line no-mixed-operators
            isSingIn === false || isSingIn === undefined && username !== null
            ? <Button variant='outlined' color="inherit">
                <Link style={{ textDecoration: 'none', color: 'white'}} to='/singIn'>Login</Link>
              </Button>
            : <AccountActionsButton username={username} silk={silk}/>
        )
}
