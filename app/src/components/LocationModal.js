import React from "react";

export default function LocationModal() {
  return (
    <div class="popup" id="popup">
      <div class="popup__content">
      <button className="close-modal">✖</button>
        <h2 class="heading-secondary">Location</h2>
        <h3 class="heading-tertiary">Address</h3>
        <h3 class="heading-tertiary">Hours of Operation</h3>
        <h3 class="heading-tertiary">Inventory</h3>
        <button className="button-1">Update Inventory</button>
      </div>
    </div>
  );
}
