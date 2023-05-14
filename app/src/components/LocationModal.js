import React, { useState, useEffect } from "react";

export default function LocationModal(props) {
  const [visible, setVisibile] = useState(false);

  const closeModal = () => {
    setVisibile(false);
  };

  useEffect(() => setVisibile(props.visible), [props]);

  return (
    <div
      className="popup"
      id="popup"
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <div className="popup__content">
        <button className="close-modal" onClick={closeModal}>
          ✖
        </button>
        {console.log(props.data)}
        <h3 className="heading-tertiary">{props.data?.location}</h3>
        <p>{props.data?.address}</p>
        <button className="button-1">Update Inventory</button>
      </div>
    </div>
  );
}
