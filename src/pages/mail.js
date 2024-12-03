import './App.css';
import { useState } from "react";

export default function Mail() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    function submit(e) {
        e.preventDefault();

        fetch("https://formcarry.com/s/32oy9CKsiK", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({name: name, email: email, message: message })
        })
        .then((res) => res.json())
        .then((res) => {
            if (res.code === 200) {
                setSubmitted(true);
            } else {
                setError(res.message);
            }
        })
        .catch((error) => setError(error));
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (submitted) {
        return <p>We've received your message! Thank you for your interest!</p>;
    }

    return (
        <div>
            <header> We'd like to hear from you.</header>

            <form onSubmit={submit}>
                <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <div className="center">
                <button type="submit">Send</button>
                </div>
            </form>
        </div>
  );
}