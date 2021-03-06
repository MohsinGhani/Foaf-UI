/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/link-passhref */

import "../styles/scss/index.scss";
import "../styles/globals.scss";
// import DashBoard from "../component/dashBoard/dashBoard";
import Head from "next/head";
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
import { userDetailes } from "../component/features/user";
import Spinner from "../component/re-usabelComponent/common/spinner";

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
  const user = useSelector((state) => state.user.userDetailes);
  const friends = useSelector((state) => state.freinds);
  const [isLoading, setLoading] = useState(false);

  var data = Cookies.get();

  useEffect(async () => {
    if (data?.token) {
      setLoading(true);
      try {
        let response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/fetch_user`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${data.token}`,
            },
          }
        );

        const getUserDetailes = await response.json();
        getUserDetailes.result.user.token = data?.token;
        console.log(getUserDetailes, "userdetailes");
        dispatch(userDetailes(getUserDetailes));
        setLoading(false);
        return userDetailes;
      } catch (err) {
        setLoading(false);
        Cookies.remove("token");
        console.log(err);
      }
    }
  }, [data?.token]);
  if (typeof window === "undefined") return <></>;
  if (isLoading) return <Spinner name="load" />;

  if (
    router?.pathname !== "/login-page" &&
    router?.pathname !== "/signup-page" &&
    router?.pathname !== "/forgotPassword-page" &&
    router?.pathname !== "/resetPassword-page" &&
    router?.pathname !== "/successful-page" &&
    router?.pathname !== "/stepVerfication-page" &&
    router?.pathname !== "/interest" &&
    router?.pathname !== "/user_Profile" &&
    !data?.token
  ) {
    router.push("/login-page");
    return <></>;
  } else if (
    (router?.pathname === "/login-page" ||
      router?.pathname === "/signup-page" ||
      router?.pathname === "/forgotPassword-page" ||
      router?.pathname === "/resetPassword-page" ||
      router?.pathname === "/successful-page" ||
      router?.pathname === "/stepVerfication-page" ||
      router?.pathname === "/stepVerfication-page" ||
      router?.pathname === "/interest" ||
      router?.pathname === "/user_Profile") &&
    data?.token
  ) {
    router.push("/");
    return <></>;
  } else if (
    router?.pathname === "/login-page" ||
    router?.pathname === "/signup-page" ||
    router?.pathname === "/forgotPassword-page" ||
    router?.pathname === "/resetPassword-page" ||
    router?.pathname === "/successful-page" ||
    router?.pathname === "/stepVerfication-page" ||
    router?.pathname === "/interest" ||
    router?.pathname === "/user_Profile"
  )
    return pageComp;

  return children;
};
