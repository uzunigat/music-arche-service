# MUSIC APP SERVER

This is the server app side from Pedify application.

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

---

This application is trying to follow [Hexagonal Architeture](https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749
): 

## .github

Contains all the github workflows and other config.

## .husky

npm package used to crate custom message (In this case to create rules on pre-commit and pre-push hooks). 

Branch name needs to have the following structure (you can also see the regular expresion on the **./validate-branch-namers.js** file):

```
feat/my-feature
fix/my-fix-feature
bump/my-bump
release/my-relase
```

Commit must follow: `feat(topic): subject` see (**commitlint.config.js** file)

## src

Contains all the files to execute the application

