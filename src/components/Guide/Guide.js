import PropTypes from "prop-types";

const Guide = (props) => {
  const { data } = props;

  return (
    <>
      {data &&
        data.map((section) => {
          return <span key={JSON.stringify(section)}>{section.bgUrl}</span>;
        })}
    </>
  );
};

Guide.prototype = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
};

export default Guide;
