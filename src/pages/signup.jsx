import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignupPage() {

    const navigate = useNavigate()

    // create state to handle form input
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    // create state to handle error
    const [error, setError] = useState({})

    // creating input handler
    function inputHandler(e) {
        setFormData({
            ...formData, [e.target.id]: e.target.value
        });
        setError({
            ...error,
            [e.target.id]: ""
        })
    }

    const validate = () => {
        const newError = {};
        if (!formData.name.trim()) newError.name = "Name is required"

        if (!formData.email.trim()) {
            newError.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newError.email = "Email is not valid"
        }

        if (!formData.password) {
            newError.password = "Password is required"
        } else if (formData.password.length < 6) {
            newError.password = "Password must be at least 6 characters"
        }

        return newError
    }

    // create form submission handler
    function signUpHandler(e) {
        e.preventDefault()
        // validate our form [input]
        const validationError = validate()
        if (Object.keys(validationError).length > 0) {
            setError(validationError)
            console.log("there's an error")
        } else {
            navigate("/profile", {
                state: formData
            })
        }
    }

    const containerStyle = {
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #cce5ff, #d5bfff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        fontFamily: "Arial, sans-serif"
    };

    const cardStyle = {
        backgroundColor: "#fff",
        borderRadius: "1rem",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
        padding: "2rem",
        width: "100%",
        maxWidth: "400px"
    };

    const titleStyle = {
        fontSize: "2rem",
        textAlign: "center",
        marginBottom: "1.5rem",
        color: "#6a1b9a"
    };

    const formGroupStyle = {
        marginBottom: "1rem"
    };

    const labelStyle = {
        display: "block",
        marginBottom: "0.5rem",
        fontWeight: "bold"
    };

    const inputStyle = {
        width: "100%",
        padding: "0.5rem",
        border: "1px solid #ccc",
        borderRadius: "0.5rem",
        fontSize: "1rem"
    };

    const buttonStyle = {
        width: "100%",
        backgroundColor: "#7e57c2",
        color: "white",
        padding: "0.75rem",
        border: "none",
        borderRadius: "0.5rem",
        fontSize: "1rem",
        cursor: "pointer",
        marginTop: "1rem"
    };

    const footerStyle = {
        textAlign: "center",
        marginTop: "1rem",
        fontSize: "0.9rem"
    };

    const linkStyle = {
        color: "#6a1b9a",
        textDecoration: "none"
    };

    const errorStyle = {
        color: "red",
        fontSize: "0.8rem",
        marginTop: "0.25rem"
    }

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h1 style={titleStyle}>Create Account</h1>
                <form onSubmit={signUpHandler} >
                    <div style={formGroupStyle}>
                        <label htmlFor="name" style={labelStyle}>Name</label>
                        <input
                            value={formData.name}
                            onChange={inputHandler}
                            id="name" type="text" placeholder="Your full name" style={inputStyle} />
                        {error.name && <div style={errorStyle} > {error.name} </div>}
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="email" style={labelStyle}>Email</label>
                        <input
                            value={formData.email}
                            onChange={inputHandler}
                            id="email" type="email" placeholder="you@example.com" style={inputStyle} />
                        {error.email && <div style={errorStyle} > {error.email} </div>}
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="password" style={labelStyle}>Password</label>
                        <input
                            value={formData.password}
                            onChange={inputHandler}
                            id="password" type="password" placeholder="••••••••" style={inputStyle} />
                        {error.password && <div style={errorStyle} > {error.password} </div>}
                    </div>
                    <button
                        type="submit" style={buttonStyle}>Sign Up</button>
                    <p style={footerStyle}>
                        Already have an account? <Link to="/" >
                            Log in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
