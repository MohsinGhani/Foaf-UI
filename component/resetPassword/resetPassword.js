import Image from "next/image";
import Link from "next/link";
import styles from "./reset.module.scss";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";

export default function ResetPassword() {
  const router = useRouter();
  const [button, setButton] = useState(false);
  const [passwordShow, setpasswordShow] = useState(false);
  const [confirmPasswordShow, setConformPasswordshow] = useState(false);
  let [showInvalidInput, setShowInvalidInput] = useState(false);

  const resetPasswordValidationSchema = yup.object().shape({
    newPassword: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),

    confirmPassword: yup
      .string()
      .required("Password is required")
      .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
  });

  const resetPasswordRes = async (value) => {
    let userdetailes = {
      password: value.password,
      email: router.query.email,
    };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/confirm/${router.query.token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdetailes),
      }
    );

    if (!response.ok) {
      setButton(false);
      const message = `Error ${response.status}`;
      throw new Error(message);
    }
    return await response.json();
  };

  const resetPassword = (func, val) => {
    setButton(true);
    func(val)
      .then((data) => {
        setButton(false);
        console.log("MERA DATA AYEGA", data);
        router.push({
          pathname: `/login-page`,
        });
      })
      .catch((err) => {
        setButton(false);
        console.log("ERROR A GYA", err.message);
        console.log(err);
      });
  };

  const submit = (handleSubmit) => {
    setShowInvalidInput(true);
    handleSubmit();
  };

  const togglePasswordVisibility = () => {
    setpasswordShow(passwordShow ? false : true);
  };
  const toggleConformPasswordVisibility = () => {
    setConformPasswordshow(confirmPasswordShow ? false : true);
  };
  return (
    <div className={styles.container}>
      <div className={styles.imageSide}>
        {/* <div className={styles.image}>
          <Image
            src="/images/reset.png" 
            className={styles.mediaImage}
            alt="reset"
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
          <div className={styles.form}>
            <Link href="/" passHref={true}>
              <Image
                src="/images/foaf.svg"
                alt="logo"
                width="147"
                height="64"
              />
            </Link>
            <p className={styles.signup}>Reset Password </p>
            {/* <p className={styles.loremText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque cum
              amet risus mattis donec libero. Et eget netus dui arcu ridiculus
              sollicitudin est.
            </p> */}
            <Formik
              initialValues={{ newPassword: "", confirmPassword: "" }}
              validationSchema={resetPasswordValidationSchema}
              onSubmit={(value) => resetPassword(resetPasswordRes, value)}
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
                  <div className={styles.password}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className={styles.label}>
                        New Password
                      </Form.Label>
                      <Form.Control
                        type={passwordShow ? "text" : "password"}
                        className={styles.input}
                        onChange={handleChange("newPassword")}
                        value={values.newPassword}
                        placeholder="Enter a new password"
                      />
                    </Form.Group>
                    {showInvalidInput && errors.newPassword && (
                      <p className={styles.error}>{errors.newPassword}</p>
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
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className={styles.label}>
                        Confirm new password
                      </Form.Label>
                      <Form.Control
                        type={confirmPasswordShow ? "text" : "password"}
                        className={styles.input}
                        placeholder="Confirm your new password"
                        onChange={handleChange("confirmPassword")}
                        value={values.confirmPassword}
                        name="confirmPassword"
                      />
                    </Form.Group>
                    {showInvalidInput && errors.confirmPassword && (
                      <p className={styles.error}>{errors.confirmPassword}</p>
                    )}
                    <div className={styles.eyeButton}>
                      <span onClick={toggleConformPasswordVisibility}>
                        {confirmPasswordShow ? (
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
                    Reset Password
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
