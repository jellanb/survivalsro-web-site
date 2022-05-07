import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Image = ({ src, alt, style }) => (
  <Zoom>
    <img src={src} alt={alt} style={{ maxWidth: '100%', ...style }} />
  </Zoom>
);

export default Image;
