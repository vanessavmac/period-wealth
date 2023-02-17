import React, { useState } from "react";

export default function Test() {
  const [now, setNow] = useState();
  async function onClick() {
    const res = await fetch(`http://localhost:8080/test`);
    const json = await res.json();
    console.log(json)
    setNow(json);
  }

  return (
    <div>
      <button onClick={onClick}>Present</button>
      {now && <p>{now}</p>}
    </div>
  );
}
