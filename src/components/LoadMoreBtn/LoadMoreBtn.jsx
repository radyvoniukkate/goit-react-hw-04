import PropTypes from "prop-types";
import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={onClick} className={styles.btn}>Load more</button>
    </div>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
