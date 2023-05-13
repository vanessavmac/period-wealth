/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('products').truncate()
  await knex('products').insert([
    { location_id: 1, type: 'pad', quantity: 20},
    { location_id: 1, type: 'tampon', quantity: '20'},
  ]);
};
