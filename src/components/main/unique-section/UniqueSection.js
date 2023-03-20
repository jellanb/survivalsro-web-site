import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import tigerGirlImg from '../../../images/WhatsApp Image 2023-03-02 at 09.55.01 (3).jpeg';
import cerberusImg from '../../../images/WhatsApp Image 2023-03-02 at 09.55.01.jpeg';
import uruchyImg from '../../../images/WhatsApp Image 2023-03-02 at 09.55.00 (2).jpeg';
import ivyImg from '../../../images/WhatsApp Image 2023-03-02 at 09.55.01 (2).jpeg';
import isyImg from '../../../images/WhatsApp Image 2023-03-02 at 09.55.00 (1).jpeg';
import lordImg from '../../../images/WhatsApp Image 2023-03-02 at 09.55.01 (1).jpeg';
import demonImg from '../../../images/WhatsApp Image 2023-03-02 at 09.55.00.jpeg';
import LabelEffect from './LabelEffect';

const useStyles = makeStyles((theme) => ({
  container: {},
  title: {
    background: 'linear-gradient(45deg, #292727 30%, #1B1919 90%)',
    color: 'white'
  },
  labelDeathMonster: {
    color: 'red'
  }
}));

const uniqueName = [
  { objname: 'MOB_CH_TIGERWOMAN', name: 'Tiger Girl', urlImg: tigerGirlImg },
  { objname: 'MOB_EU_KERBEROS', name: 'Cerberus', urlImg: cerberusImg },
  { objname: 'MOB_OA_URUCHI', name: 'Uruchi', urlImg: uruchyImg },
  { objname: 'MOB_AM_IVY', name: 'Captain Ivy', urlImg: ivyImg },
  { objname: 'MOB_KK_ISYUTARU', name: 'Isyutaru', urlImg: isyImg },
  { objname: 'MOB_TK_BONELORD', name: 'Lord Yarkan', urlImg: lordImg },
  { objname: 'MOB_RM_TAHOMET', name: 'Demon Shaitan', urlImg: demonImg }
  //{ objname: 'MOB_JUPITER_YUNO', name: 'Yuno', urlImg: '../../images/WhatsApp Image 2023-03-02 at 09.55.00.jpeg' },
  //{ objname: 'MOB_JUPITER_JUPITER', name: 'Jupiter', urlImg: '../../images/WhatsApp Image 2023-03-02 at 09.55.00.jpeg' },
  //{ objname: 'MOB_JUPITER_THE_EARTH1', name: 'The Earth', urlImg: '../../images/WhatsApp Image 2023-03-02 at 09.55.00.jpeg' },
  //{ objname: 'MOB_JUPITER_DARK_DOG', name: 'Zielkaxe', urlImg: '../../images/WhatsApp Image 2023-03-02 at 09.55.00.jpeg' },
  //{ objname: 'MOB_JUPITER_BAAL', name: 'Baal', urlImg: '../../images/WhatsApp Image 2023-03-02 at 09.55.00.jpeg' }
];

function GetMonsterDetails(dbName) {
  const unique = uniqueName.find((obj) => obj.objname === dbName);
  return unique;
}

export default function UniqueSection({ uniqueSection }) {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <ImageList sx={{ width: '100%', height: 600 }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader className={classes.title} component="div">
            <Typography className={classes.title}>Uniques</Typography>
          </ListSubheader>
        </ImageListItem>
        {uniqueSection.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={GetMonsterDetails(item.monsterName).urlImg}
              srcSet={GetMonsterDetails(item.monsterName).urlImg}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={GetMonsterDetails(item.monsterName).name} subtitle={labelMonsterInfo(item)} />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}

function labelMonsterInfo(info) {
  const name = info.charName ? info.charName.CharName16 : 'Error';
  return info.isDeath ? <Typography color="secondary">{`Killer[${name}]`}</Typography> : <LabelEffect />;
}
