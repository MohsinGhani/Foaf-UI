import Image from "next/image";
import Link from "next/link";
import styles from "./forgot.module.scss";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";

export default function ForgotPassword() {
  const router = useRouter();
  const [button, setButton] = useState(false);
  let [showInvalidInput, setShowInvalidInput] = useState(false);

  const forgotValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    // password: yup
    //   .string()
    //   .min(6, ({ min }) => `Password must be at least ${min} characters`)
    //   .required("Password is required"),
  });

  const forgotPasswordRes = async (value) => {
    setButton(true);
    let userdetailes = {
      email: value?.email,
    };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/password_reset`,
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

  const forgotPassword = (func, val) => {
    func(val)
      .then((data) => {
        setButton(false);
        console.log("MERA DATA AYEGA", data);
        router.push({
          pathname: `/resetPassword-page`,
          query: { token: data?.token, email: val?.email },
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

  return (
    <div className={styles.container}>
      <div className={styles.imageSide}>
        {/* <div className={styles.image}>
          <Image
            src="/images/forgot.png"
            className={styles.mediaImage}
            alt="forgot"
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
            <p className={styles.signup}>Forgot Password</p>
            <p className={styles.loremText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque cum
              amet risus mattis donec libero. Et eget netus dui arcu ridiculus
              sollicitudin est.
            </p>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={forgotValidationSchema}
              onSubmit={(value) => forgotPassword(forgotPasswordRes, value)}
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
                      className={styles.input}
                      onChange={handleChange("email")}
                      value={values.email}
                      placeholder="mail@friendsofaforever.com"
                    />
                  </Form.Group>
                  {showInvalidInput && errors.email && (
                    <p className={styles.error}>{errors.email}</p>
                  )}
                  {/* <Link href="/resetPassword-page">
              <a> */}
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
                    Send
                  </Button>
                  {/* </a>
            </Link> */}
                </Form>
              )}
            </Formik>
            {/* <Image src="/images/ShowIcon.png" alt="showIcon" width="24" height="24"/> */}
          </div>
        </div>
      </div>
    </div>
  );
}
