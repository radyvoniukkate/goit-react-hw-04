import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
  return (
    <div style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
      {message}
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
