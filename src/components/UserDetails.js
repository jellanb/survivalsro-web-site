import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';


export default function UserDetails({username, silk}){

    return(
        <Fragment>
            <Typography>{`${username}  |  Silk : ${silk}`}</Typography>
        </Fragment>
    )
}