import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Fragment } from 'react';
import PoliticsDetails from '../components/politics/PoliticsDetails'
import Box from '@material-ui/core/Box';

import PoliticsImage from '../images/silkroad3.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        marginBottom: theme.spacing(1),
      },
      dividerFullWidth: {
        margin: `5px 0 0 ${theme.spacing(2)}px`,
      },
      dividerInset: {
        margin: `5px 0 0 ${theme.spacing(9)}px`,
      },
  container: {
      backgroundImage:  `url(  ${PoliticsImage})`,
      backgroundSize: 'cover',
      marginBottom: theme.spacing(-2),
  },
}));

export default function ListDividers() {
  const classes = useStyles();

  return (
      <Fragment>
    <CssBaseline />
    <Container maxWidth='xl' className={classes.container}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <PoliticsDetails/>
      </Box>
    </Container>
    </Fragment>
  );
}
