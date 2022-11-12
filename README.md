# MUSIC APP SERVER

![gif](https://media.giphy.com/media/tqfS3mgQU28ko/giphy.gif
)

## Before Run

1. Create `.env` file on the root folder and copy-paste the content from `.env.sample` (contact @uzunigat to get all the env values!)
2. Install dependencies using the following command: 

```console
npm install
```

## Run Application

``` console
npm run dev
```

## Migrations

Create New Migration File
```console
knex migrate:make migration-filename
```

Rollback migration
```console
knex migrate:rollback
```