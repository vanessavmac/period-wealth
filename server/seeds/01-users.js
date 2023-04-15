/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
    { first_name: 'Vanessa', last_name: 'Mac'},
    { first_name: 'Hello', last_name: 'World'},
  ]);
};
