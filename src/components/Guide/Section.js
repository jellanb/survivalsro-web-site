import { useState, useRef, useEffect } from "react";
import { styled } from "@material-ui/core";
import PropTypes from "prop-types";

const MAX_WIDTH = 1500;

const Container = styled("div")(({ theme }) => ({
  position: "relative",
  with: "100%",
}));

const Background = styled("img")(({ theme }) => ({
  with: "100%",
}));

const Annex = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5em",
  position: "absolute",
}));

const Section = (props) => {
  const { bgUrl, data } = props;
  const [containerSize, setContainerSize] = useState(0);
  const containerRef = useRef(null);

  const updateContainerDimensions = () => {
    if (containerRef.current)
      setContainerSize(containerRef.current.clientWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateContainerDimensions);
    setContainerSize(containerRef.current?.clientWidth || 720);

    return () => {
      window.removeEventListener("resize", updateContainerDimensions);
    };
  }, []);

  const calcAnnexImageWidth = (initialWidth) => {
    return (containerSize * initialWidth) / MAX_WIDTH;
  };

  const calcAnnexTextSize = (initialSize) => {
    return (containerSize * initialSize) / MAX_WIDTH;
  };

  return (
    <Container ref={containerRef}>
      {data &&
        data.map((annex) => {
          const { videoUrl } = annex;

          return (
            <Annex key={JSON.stringify(annex)}>
              {videoUrl && (
                <iframe
                  src={videoUrl}
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
              )}
            </Annex>
          );
        })}

      {bgUrl && <Background src={bgUrl} />}
    </Container>
  );
};

Section.prototype = {
  bgUrl: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      videoUrl: PropTypes.string,
      image: PropTypes.shape({
        url: PropTypes.string,
        size: PropTypes.number,
      }),
      text: PropTypes.shape({
        value: PropTypes.string,
      }),
      position: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
      }),
    })
  ),
};

export default Section;
