import Link from "next/link";
import styles from "./signup.module.scss";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Image from "next/image";

export default function Signup() {
  const [passwordShow, setpasswordShow] = useState(false);
  const [conformPasswordShow, setConformPasswordshow] = useState(false);
  let [showInvalidInput, setShowInvalidInput] = useState(false);

  const loginValidationSchema = yup.object().shape({
    fullName: yup
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
      .min(6, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });

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
            initialValues={{ fullName: "", email: "", password: "" }}
            validationSchema={loginValidationSchema}
            onSubmit={(value) => console.log(value, "signupvalue")}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <Form>
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

                <Form.Group className="mb-3" controlId="formPhoneNumber">
                  <Form.Label className={styles.label}>
                    Phone Number*
                  </Form.Label>

                  <Form.Control
                    type="number"
                    className={styles.input}
                    placeholder="Enter Your Phone Number*"
                  />
                </Form.Group>

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
                {showInvalidInput && errors.email && <p>{errors.email}</p>}
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
                    <p> {errors.password}</p>
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
                    />
                  </Form.Group>
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
                  src="/images/google.png"
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

            <div className={styles.signin}>
              <Button variant="light" type="submit">
                <Image
                  src="/images/apple.png"
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
