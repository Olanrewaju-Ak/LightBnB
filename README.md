# LightBnB Project

A simple multi-page Airbnb clne that uses a server-side Javascript to display the information from queries to web pages via SQL queries.

- `1_queries` contains all the sql queryStrings to get different values from the db.
- `migrations` is a directory that contains the schema to create the various database tables.
- `seeds` contains files with dummy datato populate the database tables.

## Getting Started

1. Create a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the npm install command.
4. Create Database called lightbnb from the psql terminal `CREATE database lightbnb`
5. Create tables by running migrations with `\i migrations/01_schema.sql`
6. Populate the tables with the seeds using `\i migrations/02_seeds.sql`
