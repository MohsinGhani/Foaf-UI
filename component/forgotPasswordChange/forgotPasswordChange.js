import Image from 'next/image'
import Link from 'next/link'
import styles from './forgotChange.module.scss'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'



export default function ForgotPasswordChange() {
    return (
        <div className={styles.container}>
            <div className={styles.imageSide}>
                <div className={styles.image}>
                    <Image src="/images/forgot.png" className={styles.mediaImage} alt="forgot" width="500" height="500" />
                </div>
                <div className={styles.imageText}>
                    <p className={styles.imageTextOne}> Lorem ipsum dolor sit amet, consectetur elit.</p>
                    <p className={styles.imageTextTwo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies nibh lorem fames hendrerit varius fringilla. Rhoncus, purus tellus magnis tristique leo.</p>
                </div>
            </div>
            <div className={styles.formSide}>
                <div className={styles.form}>
                    <Image src="/images/logo.png" alt="logo" width="100" height="44" />
                    <p className={styles.signup}>Forgot Password </p>
                    <p className={styles.loremText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque cum amet risus mattis donec libero. Et eget netus dui arcu ridiculus sollicitudin est.</p>
                    <Form>



                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={styles.label}>Email*</Form.Label>
                            <Form.Control type="email" className={styles.input} placeholder="mail@friendsofaforever.com" />
                        </Form.Group>
                        <Link href="/forgotPassword-page">
                            <Button variant="primary" className={styles.signUpButton} type="submit">
                                Send
                            </Button>
                        </Link>
                    </Form>
                    {/* <Image src="/images/ShowIcon.png" alt="showIcon" width="24" height="24"/> */}
                </div>


            </div>
        </div>

    )
}
