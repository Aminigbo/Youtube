import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {

    const containerStyle = {
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #d0e1f9, #f9d0f9)",
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
        color: "#1a237e"
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
        backgroundColor: "#3949ab",
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
        color: "#1a237e",
        textDecoration: "none"
    };

    const navigate = useNavigate()

    function LoginController() {
        navigate("/profile")
    }

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h1 style={titleStyle}>Login</h1>
                <form>
                    <div style={formGroupStyle}>
                        <label htmlFor="email" style={labelStyle}>Email</label>
                        <input id="email" type="email" placeholder="you@example.com" style={inputStyle} />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="password" style={labelStyle}>Password</label>
                        <input id="password" type="password" placeholder="••••••••" style={inputStyle} />
                    </div>
                    {/* <Link to="/profile" >
                        <button type="submit" style={buttonStyle}>Login</button>
                    </Link> */}

                    <button
                        onClick={LoginController}
                        type="submit" style={buttonStyle}>Login</button>

                    <p style={footerStyle}>
                        Don't have an account? <Link to="/signup" >
                            Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
