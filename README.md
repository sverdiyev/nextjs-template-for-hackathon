# Walkthrough
## Current:
Right now, we only have index page with some placeholder content. 

1. Add new page in pages/NewPage folder
1. Add new endpoint at /api/exampleApiEndpoint url
1. Add new TRPC query and display on NewPage. The query is now typesafe on Front-End part, uses react-query under the hood. 
1. Add new User table by updating schema.prisma file.  
1. Connection to DB: run npx prisma db push. Creates sqlite file-db. 
1. Creating TRPC mutation to save data in DB and input elements to collect it
1. Create TRPC query to get all users and display on new page 
