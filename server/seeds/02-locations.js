/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("locations").insert([
    {
      location: "York Region-Markham Sexual Health Clinic",
      address: "4261 Highway 7 East, Suite B6-B9, Markham ON L3R 9W6",
      lng: -79.34781,
      lat: 43.85222,
    },
  ]);
}
