import Image from 'next/image'

import styles from './reset.module.scss'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'



export default function ResetPassword() {
    return (
        <div className={styles.container}>
            <div className={styles.imageSide}>
                <div className={styles.image}>
                    <Image src="/images/reset.png" className={styles.mediaImage} alt="reset" width="500" height="500" />
                </div>
                <div className={styles.imageText}>
                    <p className={styles.imageTextOne}> Lorem ipsum dolor sit amet, consectetur elit.</p>
                    <p className={styles.imageTextTwo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies nibh lorem fames hendrerit varius fringilla. Rhoncus, purus tellus magnis tristique leo.</p>
                </div>
            </div>
            <div className={styles.formSide}>
                <div className={styles.form}>
                    <Image src="/images/logo.png" alt="logo" width="110" height="48" />
                    <p className={styles.signup}>Reset Password  </p>
                    <p className={styles.loremText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque cum amet risus mattis donec libero. Et eget netus dui arcu ridiculus sollicitudin est.</p>
                    <Form>
                     

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={styles.label}>New Password</Form.Label>
                            <Form.Control type="email" className={styles.input} placeholder="mail@friendsofaforever.com" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className={styles.label}>Conform password*</Form.Label>
                            <Form.Control type="password" className={styles.input}  placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" className={styles.signUpButton} type="submit">
                            Sign Up
                        </Button>
                    </Form>
                  
                </div>

               
            </div>
        </div>

    )
}
