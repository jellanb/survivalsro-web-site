import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Fragment } from 'react';

export default function Sidebar({ social }) {

    return (
        <Fragment>
            {social.map((network) => (
                <Link style={{ color: 'white'}} display="block" variant="body1" href={network.url} key={network.name}>
                    <Grid container direction="row" spacing={1} alignItems="center">
                        <Grid item lg={8} ></Grid>
                        <Grid item lg={1}>
                            <network.icon />
                        </Grid>
                        <Grid item lg={3}>{network.name}</Grid>
                    </Grid>
                </Link>
            ))}
            </Fragment>
    );
}

