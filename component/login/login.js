import Image from "next/image";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import styles from "./login.module.scss";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [passwordShow, setpasswordShow] = useState(false);
  let [showInvalidInput, setShowInvalidInput] = useState(false);
  const [button, setButton] = useState(false);

  const signInValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });

  const signIn = (value) => {
    let userdetailes = {
      email: value.email,
      password: value.password,
    };
    setButton(true);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/login_user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdetailes),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.token) {
          router.push({
            pathname: `/home-page`,
          });
          console.log("Success:", data);
          setButton(false);
        } else {
          console.log("something wentwrong");
          setButton(false);
        }
      })
      .catch((error) => {
        setButton(false);
        console.error("Error:", error);
      });
  };

  const submit = (handleSubmit) => {
    setShowInvalidInput(true);

    handleSubmit();
  };

  const togglePasswordVisibility = () => {
    setpasswordShow(passwordShow ? false : true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSide}>
        {/* <div className={styles.image}> */}
        {/* <Image
            src="/images/login.png"
            className={styles.mediaImage}
            alt="login"
            width="600"
            height="1870px"
            // layout="fixed"
          />
        </div> */}
        {/* </div> */}
        {/* <div className={styles.imageText}>
          <p className={styles.imageTextOne}>
            Lorem ipsum dolor sit amet, consectetur elit.
          </p>
          <p className={styles.imageTextTwo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ultricies nibh lorem fames hendrerit varius fringilla. Rhoncus,
            purus tellus magnis tristique leo.
          </p>
        </div> */}
      </div>
      <div className={styles.formSide}>
        <div className={styles.form}>
          <Image src="/images/foaf.svg" alt="logo" width="168" height="73.31" />
          <p className={styles.signup}>Login </p>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={signInValidationSchema}
            onSubmit={(value) => signIn(value)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className={styles.label}>Email*</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={handleChange("email")}
                    value={values.email}
                    className={styles.input}
                    placeholder="mail@friendsofaforever.com"
                  />
                </Form.Group>
                {showInvalidInput && errors.email && (
                  <p className={styles.error}>{errors.email}</p>
                )}
                <div className={styles.password}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className={styles.label}>Password*</Form.Label>
                    <Form.Control
                      type={passwordShow ? "text" : "password"}
                      onChange={handleChange("password")}
                      value={values.password}
                      className={styles.input}
                      placeholder="Password"
                    />
                  </Form.Group>
                  {showInvalidInput && errors.password && (
                    <p className={styles.error}>{errors.password}</p>
                  )}
                  <div className={styles.eyeButton}>
                    <Image
                      src={
                        passwordShow
                          ? "/images/showPassword.png"
                          : "/images/hidePassword.jpg"
                      }
                      width="25"
                      height="25"
                      alt="eye"
                      onClick={togglePasswordVisibility}
                    />
                  </div>
                </div>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <div className={styles.checkbox}>
                    <Form.Check
                      type="checkbox"
                      label={
                        <>
                          Remember me
                          <div className={styles.textGreen}>
                            <Link href="/forgotPassword-page">
                              <a> Forgot Password?</a>
                            </Link>
                          </div>
                        </>
                      }
                    />
                  </div>
                </Form.Group>

                <Button
                  variant="primary"
                  className={styles.signUpButton}
                  disabled={!button ? false : true}
                  type="submit"
                  onClick={() => {
                    submit(handleSubmit);
                  }}
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>
          <div className={styles.sepratorPosition}>
            <div className={styles.seprator}>
              <hr />
            </div>
            <div className={styles.bottomText}>
              <p>OR Sign In With </p>
            </div>
            <div className={styles.seprator}>
              <hr />
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.signin}>
              <Button variant="light" type="submit">
                <Image
                  src="/images/google.svg"
                  alt="google"
                  width="15"
                  height="15"
                  className={styles.googleImage}
                />
                <p>
                  <span className={styles.hideText}>Sign in with </span> Google
                </p>
              </Button>
            </div>

            <div className={`${styles.signin} ${styles.apple}`}>
              <Button variant="light" type="submit">
                <Image
                  src="/images/apple.svg"
                  alt="apple"
                  width="15"
                  height="15"
                  className={styles.appleImage}
                />
                <p>
                  <span className={styles.hideText}>Sign in with </span> Apple
                </p>
              </Button>
            </div>
          </div>
          <p className={styles.signUpLink}>
            Dont have an account?
            <span className={styles.textGreen}>
              <Link href="/signup-page">
                <a> Sign Up</a>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
