import React, { useState, useEffect, useCallback } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { apiService } from "../api/apiService";
import { LocationModal } from "../components";

export default function Home() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setModalLocation] = useState([]);
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const center = useMemo(() => ({ lat: 43.8561, lng: -79.337 }), []);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  const openModal = useCallback(async () => {
    apiService
      .get("/locations/getLocation", { params: selectedLocation })
      .then((data) => {
        setModalInfo(data.location[0]);
      })
      .catch((error) => {
        console.log(error?.response.data.message);
      });
    setShowModal(true);
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  useEffect(() => {
    apiService
      .get("/locations/getAll")
      .then((data) => {
        setLocations(data.locations);
      })
      .catch((error) => {
        console.log(error?.response.data.message);
      });
  }, []);

  return (
    <div className="">
      <h2>locate free period products</h2>
      <LocationModal data={modalInfo} visible={showModal} />
      <div className="locator">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={10}
          >
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={{
                  lat: parseFloat(location.lat),
                  lng: parseFloat(location.lng),
                }}
                onClick={(event) => {
                  setModalLocation({
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng(),
                  });
                  openModal();
                }}
              />
            ))}
          </GoogleMap>
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
