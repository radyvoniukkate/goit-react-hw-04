import styles from "./ImageCard.module.css";
import PropTypes from "prop-types";

const ImageCard = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} className={styles.img} />
    </div>
  );
};

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageCard;
