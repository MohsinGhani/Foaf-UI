/* eslint-disable @next/next/link-passhref */

import "../styles/globals.scss";
import "../styles/scss/index.scss";
// import DashBoard from "../component/dashBoard/dashBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* eslint-disable @next/next/no-img-element */
import { Provider, useSelector } from "react-redux";
import store from "../store";
import Mainone from "../component/dashBoard/dashBoard";
import { useState } from "react";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthProvider pageComp={<Component {...pageProps} />}>
        <Mainone component={<Component {...pageProps} />} />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;

const AuthProvider = ({ children, pageComp }) => {
  const [auth] = useState(true);
  const router = useRouter();
  const user = useSelector((state) => state.user.user);

  if (
    typeof window !== "undefined" &&
    router?.pathname !== "/login-page" &&
    router?.pathname !== "/signup-page" &&
    !user
  ) {
    router.push("/login-page");
    return <></>;
  } else if (
    typeof window !== "undefined" &&
    (router?.pathname === "/login-page" ||
      router?.pathname === "/signup-page") &&
    user
  ) {
    router.push("/");
    return <></>;
  } else if (
    router?.pathname === "/login-page" ||
    router?.pathname === "/signup-page"
  )
    return pageComp;
  return children;
};
