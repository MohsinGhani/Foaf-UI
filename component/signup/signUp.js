import Link from "next/link";
import styles from "./signup.module.scss";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Signup() {
  const router = useRouter();
  const [button, setButton] = useState(false);

  const [passwordShow, setpasswordShow] = useState(false);
  const [conformPasswordShow, setConformPasswordshow] = useState(false);
  let [showInvalidInput, setShowInvalidInput] = useState(false);
  console.log(process.env.NEXT_PUBLIC_BASE_URL, "BASE URLll");
  const signUpValidationSchema = yup.object().shape({
    fullName: yup
      .string()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required("required"),
    phoneNumber: yup
      .string()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required("required"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
    passwordConfirmation: yup
      .string()
      .required("conform password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const signUp = (value) => {
    let userdetailes = {
      email: value.email,
      username: value.fullName,
      password: value.password,
    };
    setButton(true);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/create_user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdetailes),
    })
      .then((response) => response.json())
      .then((data) => {
        router.push("/login-page");
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const togglePasswordVisibility = () => {
    setpasswordShow(passwordShow ? false : true);
  };
  const toggleConformPasswordVisibility = () => {
    setConformPasswordshow(conformPasswordShow ? false : true);
  };

  const submit = (handleSubmit) => {
    setShowInvalidInput(true);
    handleSubmit();
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSide}>
        {/* <div className={styles.image}>
          <Image
            src="/images/signup.png"
            className={styles.mediaImage}
            alt="signup"
            width="500"
            height="500"
          />
        </div> */}
        {/* <div className={styles.imageText}>
          <p className={styles.imageTextOne}>
            {" "}
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
          <Link href="/" passHref={true}>
            <Image src="/images/foaf.svg" alt="logo" width="147" height="64" />
          </Link>
          <p className={styles.signup}>Sign Up </p>

          <Formik
            initialValues={{
              fullName: "",
              phoneNumber: "",
              email: "",
              password: "",
              passwordConfirmation: "",
            }}
            validationSchema={signUpValidationSchema}
            onSubmit={(value) => signUp(value)}
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
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label className={styles.label}>Full Name*</Form.Label>
                  <Form.Control
                    type="name"
                    onChange={handleChange("fullName")}
                    value={values.fullName}
                    className={styles.input}
                    placeholder="Enter Your Full Name"
                  />
                </Form.Group>
                {showInvalidInput && errors.fullName && (
                  <p className={styles.error}>{errors.fullName}</p>
                )}
                <Form.Group className="mb-3" controlId="formPhoneNumber">
                  <Form.Label className={styles.label}>
                    Phone Number*
                  </Form.Label>

                  <Form.Control
                    type="number"
                    className={styles.input}
                    placeholder="Enter Your Phone Number*"
                    onChange={handleChange("phoneNumber")}
                    value={values.phoneNumber}
                  />
                </Form.Group>
                {showInvalidInput && errors.phoneNumber && (
                  <p className={styles.error}>{errors.phoneNumber}</p>
                )}
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
                      className={styles.input}
                      placeholder="Password"
                      onChange={handleChange("password")}
                      value={values.password}
                    />
                  </Form.Group>
                  {showInvalidInput && errors.password && (
                    <p className={styles.error}> {errors.password}</p>
                  )}
                  <div className={styles.eyeButton}>
                    <Image
                      src={
                        passwordShow
                          ? "/images/showPassword.png"
                          : "/images/hidePassword.jpg"
                      }
                      width="25"
                      alt="eye"
                      height="25"
                      onClick={togglePasswordVisibility}
                    />
                  </div>
                </div>
                <div className={styles.password}>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicConformPassword"
                  >
                    <Form.Label className={styles.label}>
                      Confirm Password*
                    </Form.Label>
                    <Form.Control
                      className={styles.input}
                      type={conformPasswordShow ? "text" : "password"}
                      placeholder="Conform Password"
                      onChange={handleChange("passwordConfirmation")}
                      value={values.passwordConfirmation}
                    />
                  </Form.Group>
                  {showInvalidInput && errors.passwordConfirmation && (
                    <p className={styles.error}>
                      {" "}
                      {errors.passwordConfirmation}
                    </p>
                  )}
                  <div className={styles.eyeButton}>
                    <Image
                      src={
                        conformPasswordShow
                          ? "/images/showPassword.png"
                          : "/images/hidePassword.jpg"
                      }
                      width="25"
                      height="25"
                      alt="eye"
                      onClick={toggleConformPasswordVisibility}
                    />
                  </div>
                </div>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <div className={styles.checkbox}>
                    <Form.Check
                      type="checkbox"
                      label={
                        <>
                          Accept
                          <span className={styles.textGreen}>
                            {" "}
                            Terms of Use
                          </span>{" "}
                          &{" "}
                          <span className={styles.textGreen}>
                            {" "}
                            Privacy Policy.
                          </span>
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
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
          {/* </Form> */}
          {/* <Image src="/images/ShowIcon.png" alt="showIcon" width="24" height="24"/> */}

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
            Already have an account?
            <span className={styles.textGreen}>
              <Link href="/login-page">
                <a> Sign in</a>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
