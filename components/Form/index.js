import react from "react"
import { useState } from "react";
import ButtonPrimary from "../ButtonPrimary";

export default function Form() {

    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmission = async (e) => {
        e.preventDefault();
        console.log('Your message has been submitted:', { name, email, message });
    };

    return(
        <>
            <form onSubmit={handleSubmission}>
                <div>
                    <label>First name</label>
                    <input 
                        type="text"
                        id="first name"
                        value={firstName}
                        onChange={(e) => setFirst(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Last name</label>
                    <input 
                        type="text"
                        id="last name"
                        value={lastName}
                        onChange={(e) => setLast(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Phone</label>
                    <input 
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input 
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Comment or Message</label>
                    <textarea
                        type="text"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <ButtonPrimary type="submit" title="Submit"/>
            </form>
        </>
    )
}