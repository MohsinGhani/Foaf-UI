// import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './signup.module.scss'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'



export default function Signup() {
    return (
        <div className={styles.container}>
            <div className={styles.imageSide}>
                <div className={styles.image}>
                    <Image src="/images/signup.png" className={styles.mediaImage} alt="signup" width="500" height="500" />
                </div>
                <div className={styles.imageText}>
                    <p className={styles.imageTextOne}> Lorem ipsum dolor sit amet, consectetur elit.</p>
                    <p className={styles.imageTextTwo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies nibh lorem fames hendrerit varius fringilla. Rhoncus, purus tellus magnis tristique leo.</p>
                </div>
            </div>
            <div className={styles.formSide}>
                <div className={styles.form}>
                    <Image src="/images/logo.png" alt="logo" width="110" height="48" />
                    <p className={styles.signup}>Sign Up </p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label className={styles.label}>Full Name*</Form.Label>
                            <Form.Control type="name" className={styles.input} placeholder="Enter Your Full Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPhoneNumber">
                            <Form.Label className={styles.label}>Phone Number*</Form.Label>
                            <Form.Control type="number" className={styles.input} placeholder="Enter Your Phone Number*" />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={styles.label}>Email*</Form.Label>
                            <Form.Control type="email" className={styles.input} placeholder="mail@friendsofaforever.com" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className={styles.label}>Password*</Form.Label>
                            <Form.Control type="password"  className={styles.input}  placeholder="Password" />
                        </Form.Group>
                
                        <Form.Group className="mb-3" controlId="formBasicConformPassword">
                            <Form.Label className={styles.label} >Confirm Password*</Form.Label>
                            <Form.Control className={styles.input}  type="password" placeholder="Conform Password" />                          
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <div className={styles.checkbox}>
                                <Form.Check type="checkbox" label={<>Accept<span className={styles.textGreen}> Terms of Use</span> & <span className={styles.textGreen}> Privacy Policy.</span></>} />
                            </div>
                        </Form.Group>




                        <Button variant="primary" className={styles.signUpButton} type="submit">
                            Sign Up
                        </Button>
                    </Form>
                    {/* <Image src="/images/ShowIcon.png" alt="showIcon" width="24" height="24"/> */}
                </div>

                <div className={styles.bottomText}><p> OR Sign Up With </p></div>

                <div className={styles.bottom}>

                    <div className={styles.signin}>
                        <Button variant="light" type="submit">
                            <Image src="/images/google.png" alt="google" width="15" height="15" className={styles.googleImage} />
                            <p><span className={styles.hideText}>Sign in with </span> Google</p>
                        </Button>
                    </div>

                    <div className={styles.signin}>
                        <Button variant="light" type="submit">
                            <Image src="/images/apple.png" alt="apple" width="15" height="15" className={styles.appleImage} />
                            <p><span className={styles.hideText}>Sign in with </span> Apple</p>
                        </Button>
                    </div>
                </div >
                <p className={styles.signUpLink}>Already have an account? <span className={styles.textGreen}><Link href="/login-page">Sign in</Link></span></p>

            </div>
        </div>

    )
}
