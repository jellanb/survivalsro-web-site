import React from 'react';
import { CssBaseline, styled } from '@material-ui/core';
import Header from '../../components/app/header/Header';
import Footer from '../../components/app/footer/Footer';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  '& > footer': {
    marginTop: 'auto'
  }
}));

const Main = styled('div')(({ theme }) => ({
  width: 'auto'
}));

const MainLayout = ({ children }) => {
  return (
    <Container>
      <CssBaseline />
      <Header />
      <Main>{children}</Main>
      <Footer title="Silkroad Survival" description="Servidor Privado" />
    </Container>
  );
};

export default MainLayout;
