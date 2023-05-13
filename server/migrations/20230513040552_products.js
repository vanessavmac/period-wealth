/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("products", function (table) {
      table.increments("id").primary();
      table.integer("location_id", 255).references('id').inTable('locations');
      table.string("type", 255).notNullable();
      table.integer("quantity", 255).notNullable();
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable("products");
  };
  