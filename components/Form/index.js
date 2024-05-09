import react from "react"
import { useState } from "react";
import ButtonPrimary from "../ButtonPrimary";
import styles from './Form.module.css'


export default function Form() {

    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmission = async (e) => {
        e.preventDefault();
        console.log('Your message has been submitted:', { firstName, lastName, phone, email, message });
        setSubmitted(true);
    };

    return(
        <>
            {submitted ? (
               
                <p className={styles.successfulMessage}>  
                <img src="/images/check.svg" className={styles.checkConfirm}></img>
                <br/>
                <br/>
                Your form has been submitted sucessfully!</p>
            ) : (
            <form onSubmit={handleSubmission} className={styles.formContainer}>
                <div className={styles.nameContainer}> 
                    <div className={styles.nameField}>
                        <label className={styles.labelName}>First name</label>
                        <input className={styles.firstInput}
                            type="text"
                            id="first name"
                            value={firstName}
                            onChange={(e) => setFirst(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.nameField}>
                        <label className={styles.labelName}>Last name</label>
                        <input className={styles.firstInput}
                            type="text"
                            id="last name"
                            value={lastName}
                            onChange={(e) => setLast(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className={styles.phoneField}>
                    <label className={styles.labelPhone}>Phone</label>
                    <input className={styles.phoneInput}
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.emailField}>
                    <label className={styles.labelEmail}>Email</label>
                    <input className={styles.emailInput}
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.messageField}>
                    <label className={styles.labelMessage}>Comment or Message</label>
                    <textarea className={styles.messageTextarea}
                        type="text"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <ButtonPrimary type="submit" title="Submit" className={styles.submitButton}/>
            </form>
            )}
        </>
    )
}