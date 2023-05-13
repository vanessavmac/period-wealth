/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("locations", function (table) {
      table.increments("id").primary();
      table.string("location", 255).notNullable();
      table.string("address", 255).notNullable();
      table.decimal("lng", 255).notNullable();
      table.decimal("lat", 255).notNullable();
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable("locations");
  };
  