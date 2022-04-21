import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Image = ({ src, alt }) => (
  <Zoom>
    <img src={src} alt={alt} style={{ maxWidth: '100%' }} />
  </Zoom>
);

export default Image;
