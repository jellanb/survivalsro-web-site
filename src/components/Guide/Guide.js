import { styled } from '@material-ui/core';
import PropTypes from 'prop-types';
import Section from './Section';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5em',
  with: '100%'
}));

export default function Guide({ sections }) {
  return (
    <Container>
      {sections &&
        sections.map((section) => {
          return <Section key={JSON.stringify(section)} {...section} />;
        })}
    </Container>
  );
}

Guide.prototype = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      bgUrl: PropTypes.string,
      annexes: PropTypes.arrayOf(
        PropTypes.shape({
          video: PropTypes.shape({
            url: PropTypes.string,
            width: PropTypes.number,
            height: PropTypes.number
          }),
          image: PropTypes.shape({
            url: PropTypes.string,
            size: PropTypes.number
          }),
          text: PropTypes.shape({
            value: PropTypes.string
          }),
          position: PropTypes.shape({
            x: PropTypes.number,
            y: PropTypes.number
          })
        })
      )
    })
  )
};
