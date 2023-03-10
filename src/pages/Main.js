import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Carousel from 'react-material-ui-carousel';
import Grid from '@material-ui/core/Grid';
import imagenFond5 from '../images/fondoMain5.png';
import imagenFond2 from '../images/fondoMain6.png';
import imagenFond3 from '../images/fondoMain7.jpg';
import imagenFond4 from '../images/fondoMain8.png';
import { Container } from '@material-ui/core';
import DownloadBox from '../components/main/DownloadBox';
import ServerInfo from '../components/main/Serverinfo';
import BackDropPayment from '../components/common/progress/BackDropPayment';
import UseFortesBarIndo from '../hooks/useMain';
import GeneralInformationBar from '../components/app/header/sub-bar-info/GeneralInformationBar';
import ServerTimesInfo from '../components/main/ServerTimesInfo';
import PlatersOnline from '../components/main/PlayersOnline';
import List from '@material-ui/core/List';
import CardContent from '@material-ui/core/CardContent';
import UniqueSection from '../components/main/unique-section/UniqueSection';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'black'
  },
  media: {
    paddingTop: '70.25%' // 16:9
  },
  rootCard: {
    backgroundSize: 'cover'
  },
  root: {
    background: 'linear-gradient(45deg, #292727 30%, #1B1919 90%)',
    boxShadow: '0 3px 5px 2px rgba(100, 105, 135, .3)',
    borderRadius: 5
  },
  title: {
    fontSize: 14,
    color: 'white'
  }
}));

export default function Main() {
  const classes = useStyles();
  const [load, setLoad] = useState(true);
  const {
    loadInformation,
    userLastKill,
    usersOnlineCount,
    fortressInfo,
    systemTime,
    playesOnlineNames,
    uniqueSection
  } = UseFortesBarIndo();
  let items = [{ imagen: imagenFond2 }, { imagen: imagenFond3 }, { imagen: imagenFond4 }, { imagen: imagenFond5 }];

  useEffect(() => {
    loadInformation(setLoad);
  }, []);

  return (
    <Fragment>
      <CssBaseline />
      <GeneralInformationBar
        fortressInfo={fortressInfo}
        userLastKill={userLastKill}
        usersOnlineCount={usersOnlineCount}
      />
      <Container maxWidth="xl" className={classes.container}>
        <br />
        <Grid container spacing={1}>
          <Grid item xl={3} lg={3} xs={12}>
            <ServerInfo />
          </Grid>
          <Grid item xl={7} lg={7} xs={12}>
            <Carousel>
              {items.map((item, index) => (
                <Item key={index} item={item} />
              ))}
            </Carousel>
          </Grid>
          <Grid item xl={2} lg={2} xs={12}>
            <Card className={classes.root}>
              <CardContent>
                <List className={classes.title}>
                  <ServerTimesInfo open={load} serverTime={systemTime} />
                </List>
                <List className={classes.title}>
                  <PlatersOnline playesOnlineNames={playesOnlineNames} />
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xl={3} lg={3} xs={12}>
            <DownloadBox />
          </Grid>
          <Grid item xl={9} lg={9} xs={12}>
            <UniqueSection uniqueSection={uniqueSection} />
          </Grid>
        </Grid>
        <br />
      </Container>
      <BackDropPayment open={load} />
    </Fragment>
  );
  function Item({ item }) {
    return (
      <Card className={classes.rootCard}>
        <CardMedia image={item.imagen} className={classes.media} />
      </Card>
    );
  }
}
