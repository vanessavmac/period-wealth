import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { LocationModal } from "../components";

export default function Home() {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  console.log(process.env.REACT_APP_GOOGLE_API_KEY);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat: 43.8561, lng: -79.337 }), []);

  return (
    <div className="">
      <h2>locate free period products</h2>
      <LocationModal></LocationModal>
      <div className="locator">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={10}
          />
        )}
      </div>
      <h2>request a new location</h2>
      <h2>resources</h2>
      <button className="button-1" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
