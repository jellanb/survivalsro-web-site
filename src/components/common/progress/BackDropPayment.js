import React, { Fragment } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import ProgressIcon from './ProgressIcon';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

function TypographyDemo(props) {
    const { loading = false } = props;

    return (
        <div>
            {loading ? <ProgressIcon/> : <div/>}
        </div>
    );
}

export default function BackDropPayment({open}) {
    const classes = useStyles()

    return (
        <Fragment>
            <Backdrop
                className={classes.backdrop}
                open={open}
            >
                <TypographyDemo loading={open} /> {/*<CircularProgress color="inherit" />*/}
            </Backdrop>
        </Fragment>
    );
}
