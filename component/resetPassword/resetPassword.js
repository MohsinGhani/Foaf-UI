import Image from "next/image";
import Link from "next/link";
import styles from "./reset.module.scss";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useRouter } from 'next/router'

export default function ResetPassword() {
  const router = useRouter()
  const [passwordShow, setpasswordShow] = useState(false);
  const [conformPasswordShow, setConformPasswordshow] = useState(false);
  let [showInvalidInput, setShowInvalidInput] = useState(false);


  const resetPasswordValidationSchema = yup.object().shape({
    newPassword: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),

      conformPassword: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),

  });
console.log(router.query,"qereyyyyyyyyy")
  const resetPassword = (value) => {
    let userdetailes = {

      newPassword:value.newPassword,
      conformPassword:value.conformPassword
      
    }
  
    fetch(`http://18.118.79.251/api/confirm/${router.query}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userdetailes),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  
  }



    const submit = (handleSubmit) => {
      setShowInvalidInput(true);
      handleSubmit();
    };



  const togglePasswordVisibility = () => {
    setpasswordShow(passwordShow ? false : true);
  };
  const toggleConformPasswordVisibility = () => {
    setConformPasswordshow(conformPasswordShow ? false : true);
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
      <div className={styles.formSide}>
        <div className={styles.form}>
          <Link href="/" passHref={true}>
            <Image src="/images/foaf.svg" alt="logo" width="147" height="64" />
          </Link>
          <p className={styles.signup}>Reset Password </p>
          <p className={styles.loremText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque cum
            amet risus mattis donec libero. Et eget netus dui arcu ridiculus
            sollicitudin est.
          </p>
          <Formik
            initialValues={{ newPassword: "" ,conformPassword:""}}
            validationSchema={resetPasswordValidationSchema}
            onSubmit={(value) => resetPassword(value)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (<Form
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
            <div className={styles.password}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className={styles.label}>New Password</Form.Label>
                <Form.Control
                  type="password"
                  className={styles.input}
                  onChange={handleChange("newPassword")}
                  placeholder="mail@friendsofaforever.com"
                />
              </Form.Group>
              {showInvalidInput && errors.newPassword && <p>{errors.newPassword}</p>}
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className={styles.label}>
                  Conform password*
                </Form.Label>
                <Form.Control
                  type="password"
                  className={styles.input}
                  placeholder="Password"
                  onChange={handleChange("conformPassword")}
                />
              </Form.Group>
              {showInvalidInput && errors.conformPassword && <p>{errors.conformPassword}</p>}
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
            <Button
              variant="primary"
              className={styles.signUpButton}
              type="submit"
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
  );
}
