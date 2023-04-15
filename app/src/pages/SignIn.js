import React from "react";
import { Link } from "react-router-dom";
import useGoogleAuth from "../hooks/google-auth";

export default function SignIn() {
  const { loading, error } = useGoogleAuth(
    "/users/signin",
    "signin_with"
  );

  return (
    <>
      <nav style={{ padding: "2rem" }}>
        <Link to="/">Go Back</Link>
      </nav>
      <header style={{ textAlign: "center" }}>
        <h1>Login to continue</h1>
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
        {loading ? <div>Loading....</div> : <div id="signin_with"></div>}
      </main>
      <footer></footer>
    </>
  );
}
