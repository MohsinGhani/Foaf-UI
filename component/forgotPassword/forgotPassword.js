import Image from "next/image";
import Link from "next/link";
import styles from "./forgot.module.scss";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";
import { API } from "../../pages/api/resetPassword";
import { emailRegex, phoneRegex } from "../../shared/helper";

export default function ForgotPassword() {
  const router = useRouter();
  const [button, setButton] = useState(false);
  let [showInvalidInput, setShowInvalidInput] = useState(false);

  const forgotValidationSchema = yup.object().shape({
    sendTo: yup
      .string()
      // .email("Please enter valid email")
      .required("This field is required.")
      .test("IsEmailOrPhone", "Enter Valid Phone/Email", function (value) {
        if (value === null) {
          return true;
        }

        let isValidEmail = emailRegex.test(value);
        let isValidPhone = phoneRegex.test(value);

        if (!isValidEmail && !isValidPhone) {
          return false;
        }

        return true;
      }),
  });

  const forgotPasswordRes = async (value, request) => {
    console.log(request, "request.keyrequest.key");
    console.log({ [request["key"]]: "hello" });
    setButton(true);
    let userdetailes = {
      [request["key"]]: value?.sendTo,
    };
    const response = await fetch(`${request.api}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(userdetailes),
    });

    if (!response.ok) {
      setButton(false);
      const message = `Error ${response.status}`;
      throw new Error(message);
    }
    return await response.json();
  };

  const forgotPassword = (func, val) => {
    let ValidEmail = emailRegex.test(val.sendTo);
    let ValidPhone = phoneRegex.test(val.sendTo);
    console.log("isValidEmail", ValidEmail, ValidPhone);
    let request = {};
    if (ValidEmail) {
      request.api = API.SEND_EMAIL;
      request.key = "email";
    } else {
      request.api = API.SEND_MOBILE;
      request.key = "mob";
    }
    func(val, request)
      .then((data) => {
        setButton(false);
        console.log("MERA DATA AYEGA", data);
        router.push({
          pathname: `/stepVerfication-page`,
          query: { email: val?.sendTo },
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
            <p className={styles.signup}>Forgot Password?</p>
            {/* <p className={styles.loremText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque cum
              amet risus mattis donec libero. Et eget netus dui arcu ridiculus
              sollicitudin est.
            </p> */}
            <Formik
              initialValues={{ sendTo: "" }}
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
                    <Form.Label className={styles.label}>
                      Email or Mobile Number*
                    </Form.Label>
                    <Form.Control
                      // type="email"
                      className={styles.input}
                      onChange={handleChange("sendTo")}
                      value={values.sendTo}
                      placeholder="Enter email or mobile number"
                    />
                  </Form.Group>
                  {showInvalidInput && errors.sendTo && (
                    <p className={styles.error}>{errors.sendTo}</p>
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
            <div className={styles.sepratorPosition}>
              <div className={styles.seprator}>
                <hr />
              </div>
              <div className={styles.bottomText}>
                <p>OR Sign Up With Google </p>
              </div>
              <div className={styles.seprator}>
                <hr />
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.signin}>
                <Button variant="light" type="submit">
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
    </div>
  );
}
