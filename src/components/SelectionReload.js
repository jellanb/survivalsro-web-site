import React, {Fragment, useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

export default function SelectionReload({ title, max, min, defaultValue, mark, handleChange }) {
    const classes = useStyles();
    const [ value, setValue ] = useState(0);

    const handleChangeSlider = async (event, newValue) => {
        await setValue(newValue);
    }

    const handleChangeCommit = async () => {
        await handleChange(value);
        console.log(value);
    }

    return (
        <Fragment>
            <br/>
            <Card className={classes.root}>
                <CardContent>
                    <Typography gutterBottom>{ title }</Typography>
                    <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        min={min}
                        max={max}
                        marks={mark}
                        defaultValue={defaultValue}
                        onChange={handleChangeSlider}
                        onChangeCommitted={handleChangeCommit}
                    />
                        <div className={classes.margin} />
                </CardContent>
            </Card>
            <br/>
        </Fragment>
    );
}
