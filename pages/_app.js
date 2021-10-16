/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/link-passhref */

import "../styles/globals.scss";
import "../styles/scss/index.scss";
// import DashBoard from "../component/dashBoard/dashBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* eslint-disable @next/next/no-img-element */
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "../store";
import Mainone from "../component/dashBoard/dashBoard";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { userData } from "../component/features/user";

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
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user.user);
  const friends = useSelector((state) => state.freinds);
  const [isLoading, setLoading] = useState(false);

  // console.log(user, "what is the value of user");

  var data = Cookies.get();
  // console.log(data?.token, "token");
  useEffect(async () => {
    if (data.token) {
      setLoading(true);
      try {
        let response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/get_user`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${data.token}`,
            },
          }
        );

        const getuser = await response.json();
        console.log(getuser, "getuser");
        dispatch(userData(getuser));
        setLoading(false);
        return userData;
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    }
  }, []);
  if (isLoading) return <>Loading...</>;
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
