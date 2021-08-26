import Image from "next/image";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import styles from "./login.module.scss";

export default function Login() {
  const [passwordShow, setpasswordShow] = useState(false);
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
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className={styles.label}>Email*</Form.Label>
              <Form.Control
                type="email"
                className={styles.input}
                placeholder="mail@friendsofaforever.com"
              />
            </Form.Group>
            <div className={styles.password}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className={styles.label}>Password*</Form.Label>
                <Form.Control
                  type={passwordShow ? "text" : "password"}
                  className={styles.input}
                  placeholder="Password"
                />
              </Form.Group>
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
              type="submit"
            >
              Login
            </Button>
          </Form>

          <div className={styles.bottomText}>
            <p> OR Sign Up With </p>
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
