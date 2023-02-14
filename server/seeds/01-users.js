/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
    {id: 1, first_name: 'Vanessa', last_name: 'Mac'},
    {id: 2, first_name: 'Hello', last_name: 'World'},
  ]);
};
