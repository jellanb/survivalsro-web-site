import { useState, useRef, useEffect } from "react";
import { styled } from "@material-ui/core";
import PropTypes from "prop-types";

const MAX_WIDTH = 720;

const Container = styled("div")(({ theme }) => ({
  position: "relative",
  with: "100%",
  minHeight: "1em",
}));

const Background = styled("img")(({ theme }) => ({
  with: "100%",
}));

const Annex = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5em",
  minHeight: "1em",
}));

const AnnexImg = styled("img")(({ theme }) => ({
  with: "100%",
}));

const AnnexText = styled("span")(({ theme }) => ({
  with: "100%",
  maxWidth: MAX_WIDTH,
  minHeight: "1em",
}));

const Section = ({ bgUrl, annexes }) => {
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

  return (
    <Container
      ref={containerRef}
      style={bgUrl ? { backgroundImage: `url(${bgUrl})` } : {}}
    >
      {annexes &&
        annexes.map((annex) => {
          const { video, image, text, position } = annex;

          return (
            <Annex
              key={JSON.stringify(annex)}
              style={{
                ...(position
                  ? {
                      top: `${position.y}px`,
                      left: `${position.x}px`,
                      position: "absolute",
                    }
                  : {}),
              }}
            >
              {video && (
                <iframe
                  src={video.url}
                  width={video.width}
                  height={video.height}
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
              )}

              {image && (
                <AnnexImg
                  style={{
                    width: `${calcAnnexImageWidth(image.size)}em`,
                    maxWidth: `${calcAnnexImageWidth(image.size)}em`,
                  }}
                  src={image.url}
                />
              )}

              {text && (
                <AnnexText
                  style={{
                    fontSize: `${text.size}em`,
                    width: `${text.width | "auto"}px`,
                    color: `${text.color | "auto"}px`,
                  }}
                >
                  {text.value}
                </AnnexText>
              )}
            </Annex>
          );
        })}
    </Container>
  );
};

Section.prototype = {
  bgUrl: PropTypes.string,
  annexes: PropTypes.arrayOf(
    PropTypes.shape({
      video: PropTypes.shape({
        url: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
      }),
      image: PropTypes.shape({
        url: PropTypes.string,
        size: PropTypes.number,
      }),
      text: PropTypes.shape({
        value: PropTypes.string,
        width: PropTypes.number,
        color: PropTypes.string,
      }),
      position: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
      }),
    })
  ),
};

export default Section;
