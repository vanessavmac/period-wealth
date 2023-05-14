import db from "../../db/db.js";

async function getAll() {
  const locations = await db.locations.getAll();
  if (locations.length === 0) {
    throw new Error("Error retrieving locations.");
  }
  return {
    message: "All locations retrieved",
    locations,
  };
}

async function getLocation(params) {
  const location = await db.locations.getLocation(params);
  return {
    message: "Location retrieved",
    location: location,
  };
}

export default { getAll, getLocation };
