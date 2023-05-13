/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('transactions').truncate()
  await knex('transactions').insert([
    { test: "random" }
  ]);
};
