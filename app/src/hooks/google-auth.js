import { useState, useEffect, useCallback } from "react";
import { apiService } from "../api/apiService";

const useGoogleAuth = (url, action) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleAuth = useCallback(
    (response) => {
      setLoading(true);
      apiService
        .post(url, { credential: response.credential })
        .then((data) => {
          setLoading(false);
          if (data?.user) {
            localStorage.setItem("user", JSON.stringify(data?.user));
            window.location.reload();
          }
        })
        .catch((error) => {
          setError(error?.response.data.message);
          setLoading(false);
        });
    },
    [url]
  );

  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogleAuth,
      });

      google.accounts.id.renderButton(document.getElementById(action), {
        theme: "outline",
        text: action,
        shape: "pill",
      });
    }
  }, [handleGoogleAuth, action]);

  return { error, loading };
};

export default useGoogleAuth;
