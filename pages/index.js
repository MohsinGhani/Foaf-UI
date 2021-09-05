import Head from "next/head";
import Image from "next/image";
import Signup from "../component/signup/signUp";

// import styles from "../styles/Home.module.scss";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Login from "../component/login/login";
import ResetPassword from "../component/resetPassword/resetPassword";
import ForgotPassword from "../component/forgotPassword/forgotPassword";
import DashBoard from "../component/dashBoard/dashBoard";

export default function Home() {
  return (
    //  <Signup/>
    // <Login />
    <DashBoard />
    // <ResetPassword/>
    // <ForgotPassword/>
    // <ForgotPasswordChange/>
  );
}
