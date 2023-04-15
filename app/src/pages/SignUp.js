import React from "react";
import { Link } from "react-router-dom";
import useGoogleAuth from "../hooks/google-auth";

export default function SignUp() {
  const { error, loading } = useGoogleAuth( "/users/signup", "signup_with")

  return (
    <>
      <nav style={{ padding: "2rem" }}>
        <Link to="/">Go Back</Link>
      </nav>
      <header style={{ textAlign: "center" }}>
        <h1>Register to continue</h1>
      </header>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading ? (
          <div>Loading....</div>
        ) : (
          <div id="signup_with"></div>
        )}
      </main>
      <footer></footer>
    </>
  );
}
