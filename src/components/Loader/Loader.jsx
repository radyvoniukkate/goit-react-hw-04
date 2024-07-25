import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Circles color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;
