import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

  const ImageGallery = ({ images, onImageClick }) => {
    return (
      <>
        {images.length > 0 && (
          <ul className={styles.list}>
            {images.map((image, index) => (
              <li
                key={`${image.id}-${index}`}
                onClick={() => onImageClick(image)}
              >
                <ImageCard src={image.urls.thumb} alt={image.alt_description} />
              </li>
            ))}
          </ul>
        )}
      </>
    );
  };

  ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        urls: PropTypes.shape({
          thumb: PropTypes.string.isRequired,
        }).isRequired,
        alt_description: PropTypes.string.isRequired,
      })
    ).isRequired,
    onImageClick: PropTypes.func.isRequired,
  };

export default ImageGallery;