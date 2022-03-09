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
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  let [showInvalidInput, setShowInvalidInput] = useState(false);

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
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&.,]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Password is required"),
    passwordConfirmation: yup
      .string()
      .required("conform password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    checkbox: yup
      .bool()
      .oneOf([true], "Accept Terms & Privacy Policy is required"),
  });

  const signUpRes = async (value) => {
    setButton(true);
    let userdetailes = {
      email: value.email,
      username: value.fullName,
      password: value.password,
      phone_number: value.phoneNumber,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/create_user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdetailes),
      }
    );

    console.log(response, "responce,,,");

    if (!response.ok) {
      setButton(false);
      const error = await response.json();
      console.log(error, "error");
      setEmailError(error?.username[0]);
      setNameError(error.email[0]);
      throw new Error(error);
    }

    return await response.json();
  };

  const signUp = (func, val) => {
    func(val)
      .then((data) => {
        setButton(false);
        console.log("MERA DATA AYEGA", data);
        router.push({
          pathname: `/stepVerfication-page`,
          query: { user: "create", email: val.email },
        });
      })
      .catch((error) => {
        setButton(false);
        console.log("ERROR ya hai", error);
        alert("user can not create");
        // if (error.response) {
        //   console.log(error.response.data);
        // } else if (error.request) {
        //   console.log(error.request);
        // } else {
        //   console.log("Error", error.message);
        // }
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
      <div className={styles.main}>
        <div className={styles.topBar}></div>
        <div className={styles.formSide}>
          {/* <div className={styles.topbar}></div> */}
          <div className={styles.form}>
            <Link href="/" passHref={true}>
              <Image
                src="/images/foaf.svg"
                alt="logo"
                width="147"
                height="64"
              />
            </Link>
            <p className={styles.signup}>Sign Up </p>

            <Formik
              initialValues={{
                fullName: "",
                phoneNumber: "",
                email: "",
                password: "",
                passwordConfirmation: "",
                checkbox: false,
              }}
              validationSchema={signUpValidationSchema}
              onSubmit={(value) => signUp(signUpRes, value)}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
                setFieldValue,
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
                  {nameError && (
                    <p style={{ color: "red" }}>This feild must be unique</p>
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
                  {emailError && (
                    <p style={{ color: "red" }}>This feild must be unique</p>
                  )}
                  <div className={styles.password}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className={styles.label}>
                        Password*
                      </Form.Label>
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
                      <span onClick={togglePasswordVisibility}>
                        {passwordShow ? (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 9C11.206 9.00524 10.4459 9.32299 9.88447 9.88447C9.32299 10.4459 9.00524 11.206 9 12C9 13.642 10.358 15 12 15C13.641 15 15 13.642 15 12C15 10.359 13.641 9 12 9Z"
                              fill="black"
                            />
                            <path
                              d="M11.9998 5C4.3668 5 2.0728 11.617 2.0518 11.684L1.9458 12L2.0508 12.316C2.0728 12.383 4.3668 19 11.9998 19C19.6328 19 21.9268 12.383 21.9478 12.316L22.0538 12L21.9488 11.684C21.9268 11.617 19.6328 5 11.9998 5ZM11.9998 17C6.6488 17 4.5758 13.154 4.0738 12C4.5778 10.842 6.6518 7 11.9998 7C17.3508 7 19.4238 10.846 19.9258 12C19.4218 13.158 17.3478 17 11.9998 17Z"
                              fill="black"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.0002 17C10.9462 17 11.8102 16.897 12.5982 16.719L10.8412 14.962C10.5682 14.983 10.2912 15 10.0002 15C4.64922 15 2.57622 11.154 2.07422 9.99997C2.45117 9.15878 2.96027 8.38331 3.58222 7.70297L2.18422 6.30497C0.646223 7.97197 0.0632231 9.65097 0.0522231 9.68397C-0.0167566 9.88933 -0.0167566 10.1116 0.0522231 10.317C0.0732231 10.383 2.36722 17 10.0002 17ZM10.0002 2.99997C8.16322 2.99997 6.65422 3.39597 5.39622 3.98097L1.70722 0.292969L0.293223 1.70697L18.2932 19.707L19.7072 18.293L16.3882 14.974C19.0022 13.023 19.9352 10.359 19.9492 10.317C20.0182 10.1116 20.0182 9.88933 19.9492 9.68397C19.9272 9.61697 17.6332 2.99997 10.0002 2.99997ZM14.9722 13.558L12.6922 11.278C12.8822 10.888 13.0002 10.459 13.0002 9.99997C13.0002 8.35897 11.6412 6.99997 10.0002 6.99997C9.54122 6.99997 9.11222 7.11797 8.72322 7.30897L6.91522 5.50097C7.90774 5.16038 8.95093 4.99097 10.0002 4.99997C15.3512 4.99997 17.4242 8.84597 17.9262 9.99997C17.6242 10.692 16.7602 12.342 14.9722 13.558Z"
                              fill="black"
                            />
                          </svg>
                        )}
                      </span>
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
                        placeholder="Confirm Password"
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
                      <span onClick={toggleConformPasswordVisibility}>
                        {conformPasswordShow ? (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 9C11.206 9.00524 10.4459 9.32299 9.88447 9.88447C9.32299 10.4459 9.00524 11.206 9 12C9 13.642 10.358 15 12 15C13.641 15 15 13.642 15 12C15 10.359 13.641 9 12 9Z"
                              fill="black"
                            />
                            <path
                              d="M11.9998 5C4.3668 5 2.0728 11.617 2.0518 11.684L1.9458 12L2.0508 12.316C2.0728 12.383 4.3668 19 11.9998 19C19.6328 19 21.9268 12.383 21.9478 12.316L22.0538 12L21.9488 11.684C21.9268 11.617 19.6328 5 11.9998 5ZM11.9998 17C6.6488 17 4.5758 13.154 4.0738 12C4.5778 10.842 6.6518 7 11.9998 7C17.3508 7 19.4238 10.846 19.9258 12C19.4218 13.158 17.3478 17 11.9998 17Z"
                              fill="black"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.0002 17C10.9462 17 11.8102 16.897 12.5982 16.719L10.8412 14.962C10.5682 14.983 10.2912 15 10.0002 15C4.64922 15 2.57622 11.154 2.07422 9.99997C2.45117 9.15878 2.96027 8.38331 3.58222 7.70297L2.18422 6.30497C0.646223 7.97197 0.0632231 9.65097 0.0522231 9.68397C-0.0167566 9.88933 -0.0167566 10.1116 0.0522231 10.317C0.0732231 10.383 2.36722 17 10.0002 17ZM10.0002 2.99997C8.16322 2.99997 6.65422 3.39597 5.39622 3.98097L1.70722 0.292969L0.293223 1.70697L18.2932 19.707L19.7072 18.293L16.3882 14.974C19.0022 13.023 19.9352 10.359 19.9492 10.317C20.0182 10.1116 20.0182 9.88933 19.9492 9.68397C19.9272 9.61697 17.6332 2.99997 10.0002 2.99997ZM14.9722 13.558L12.6922 11.278C12.8822 10.888 13.0002 10.459 13.0002 9.99997C13.0002 8.35897 11.6412 6.99997 10.0002 6.99997C9.54122 6.99997 9.11222 7.11797 8.72322 7.30897L6.91522 5.50097C7.90774 5.16038 8.95093 4.99097 10.0002 4.99997C15.3512 4.99997 17.4242 8.84597 17.9262 9.99997C17.6242 10.692 16.7602 12.342 14.9722 13.558Z"
                              fill="black"
                            />
                          </svg>
                        )}
                      </span>
                    </div>
                  </div>

                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <div className={styles.checkbox}>
                      <Form.Check
                        type="checkbox"
                        name="checkbox"
                        onChange={handleChange}
                        value={values.checkbox}
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
                    {showInvalidInput && errors.checkbox && (
                      <p className={styles.error}> {errors.checkbox}</p>
                    )}
                  </Form.Group>

                  <Button
                    variant="primary"
                    className={styles.signUpButton}
                    disabled={!button ? false : true}
                    type="submit"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        submit(handleSubmit);
                      }
                    }}
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
                  {/* <Image
                  src="/images/google.svg"
                  alt="google"
                  width="15"
                  height="15"
                  className={styles.googleImage}
                /> */}
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.9981 12.2661C24.0126 11.4408 23.9255 10.6155 23.7416 9.81396H12.2432V14.2676H18.9941C18.7377 15.847 17.8327 17.251 16.4922 18.1616L16.468 18.3086L20.1024 21.0691L20.354 21.0928C22.6624 19.0011 23.9981 15.9229 23.9981 12.2661Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12.2437 24.0002C15.549 24.0002 18.3269 22.933 20.3546 21.0927L16.4927 18.1568C15.2393 18.9821 13.7536 19.3995 12.2486 19.3568C9.0739 19.3378 6.26704 17.3268 5.2798 14.3672L5.13462 14.3814L1.35503 17.2462L1.30664 17.379C3.37791 21.4437 7.6124 24.0049 12.2437 24.0002Z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.27496 14.372C5.00879 13.6083 4.86845 12.8068 4.86845 11.9957C4.87329 11.1894 5.00879 10.3879 5.26528 9.61949L5.26044 9.46297L1.43247 6.55078L1.30664 6.60769C-0.435547 9.99893 -0.435547 13.9925 1.30664 17.3838L5.27496 14.372Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.2436 4.63936C14.0003 4.6109 15.6941 5.2512 16.9766 6.42746L20.4319 3.1216C18.2155 1.08212 15.2779 -0.0324799 12.2388 0.000720943C7.60747 0.000720943 3.37298 2.55719 1.29688 6.61718L5.25552 9.62897C6.25244 6.66935 9.06414 4.65833 12.2436 4.63936Z"
                        fill="#EB4335"
                      />
                    </svg>
                  </span>

                  <p>
                    <span className={styles.hideText}>Sign in with </span>{" "}
                    Google
                  </p>
                </Button>
              </div>

              <div className={`${styles.signin} ${styles.apple}`}>
                <Button variant="light" type="submit">
                  {/* <Image
                  src="/images/apple.svg"
                  alt="apple"
                  width="15"
                  height="15"
                  className={styles.appleImage}
                /> */}
                  <span>
                    <svg
                      width="20"
                      height="23"
                      viewBox="0 0 25 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M20.3693 14.7476C20.3568 12.461 21.3911 10.7352 23.4845 9.46416C22.3132 7.78815 20.5437 6.86603 18.2073 6.68535C15.9954 6.51089 13.578 7.97506 12.6932 7.97506C11.7586 7.97506 9.61534 6.74765 7.93309 6.74765C4.45644 6.80373 0.761719 9.52023 0.761719 15.0467C0.761719 16.6791 1.06079 18.3655 1.65892 20.1059C2.45643 22.3925 5.33494 28 8.33807 27.9065C9.90817 27.8691 11.0172 26.7912 13.0608 26.7912C15.0421 26.7912 16.0702 27.9065 17.821 27.9065C20.849 27.8629 23.4534 22.7663 24.2135 20.4735C20.1512 18.5607 20.3693 14.866 20.3693 14.7476ZM16.8428 4.51713C18.5437 2.49844 18.388 0.660435 18.3381 0C16.8365 0.0872273 15.0982 1.02181 14.1076 2.17445C13.0172 3.40809 12.3755 4.93457 12.5125 6.65419C14.1387 6.7788 15.6216 5.94391 16.8428 4.51713Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="24.976" height="28" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <p>
                    <span className={styles.hideText}>Sign in with </span> Apple
                  </p>
                </Button>
              </div>
            </div>
            <p className={styles.signUpLink}>
              Already have an account?
              <span className={styles.signUpText}>
                <Link href="/login-page">
                  <a> Sign in</a>
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
