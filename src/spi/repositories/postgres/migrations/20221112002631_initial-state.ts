import { Knex } from 'knex'

const tokenTable = 'token'

const tables = [tokenTable]

const ON_UPDATE_TIMESTAMP_FUNCTION = `
  CREATE OR REPLACE FUNCTION on_update_timestamp()
  RETURNS trigger AS $$
  BEGIN
    NEW.updated_at = now();
    RETURN NEW;
  END;
$$ language 'plpgsql';
`

const DROP_ON_UPDATE_TIMESTAMP_FUNCTION = `DROP FUNCTION on_update_timestamp`
const CREATE_UUID_OSSP_EXTENSION = 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'
const DROP_UUID_OSSP_EXTENSION = 'DROP EXTENSION IF EXISTS "uuid-ossp";'

export async function up(knex: Knex): Promise<void> {
  await knex.raw(ON_UPDATE_TIMESTAMP_FUNCTION)
  await knex.raw(CREATE_UUID_OSSP_EXTENSION)

  // Token Table

  await knex.schema.createTable(tokenTable, (table) => {
    table.uuid('id').notNullable().primary().defaultTo(knex.raw('uuid_generate_v4()'))
    table.string('access_token', 512).notNullable()
    table.string('token_type').notNullable()
    table.string('expires_in', 512).notNullable()
    table.string('scope', 512).notNullable()
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  const promisses = tables.map((tableName) => knex.schema.dropTableIfExists(tableName))

  await Promise.all(promisses)

  await knex.raw(DROP_ON_UPDATE_TIMESTAMP_FUNCTION)
  await knex.raw(DROP_UUID_OSSP_EXTENSION)
}
