import { Knex } from 'knex'

const tokenTable = 'tokens'
const userTable = 'users'

const tables = [tokenTable, userTable]

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
    table.string('refresh_token', 512).notNullable()
    table.string('token_type').notNullable()
    table.string('expires_in').notNullable()
    table.timestamp('expires_at').notNullable()
    table.string('scope', 512).notNullable()
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
  })

  // User Table

  await knex.schema.createTable(userTable, (table) => {
    table.uuid('id').notNullable().primary().defaultTo(knex.raw('uuid_generate_v4()'))
    table.string('display_name').notNullable()
    table.string('spotify_id').notNullable()
    table.string('token_id').notNullable().unique()
    table.string('external_urls_spotify').notNullable()
    table.string('followers_href')
    table.string('followers_total').notNullable()
    table.string('href').notNullable()
    table.string('type').notNullable()
    table.string('uri').notNullable()
    table.string('image_url').notNullable()
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  const promisses = tables.map((tableName) => knex.schema.dropTableIfExists(tableName))

  await Promise.all(promisses)

  await knex.raw(DROP_ON_UPDATE_TIMESTAMP_FUNCTION)
  await knex.raw(DROP_UUID_OSSP_EXTENSION)
}
