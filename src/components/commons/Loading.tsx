import loading from "../../assets/loadings/loading.gif";
const Loading = ({ title = "" }) => {
  return (
    <div className="loading">
      <img src={loading} alt="" />
      <b>Loading {title}...</b>
    </div>
  );
};

export default Loading;
