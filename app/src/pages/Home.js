import React from "react";

export default function Home() {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <>
      <h1>Search for closest location with free period products</h1>
      <h1>Update inventory stats</h1>
      <h1>Request </h1>
      <h1>Resources</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
}
