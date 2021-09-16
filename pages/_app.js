import "../styles/globals.scss";
import "../styles/scss/index.scss";
import DashBoard from "../component/dashBoard/dashBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DashBoard />
    </>
  );
}

export default MyApp;
