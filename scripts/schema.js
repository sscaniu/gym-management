const { db } = require('@vercel/postgres');

/*Creates the Users table*/
async function createUsers(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "users" table if it doesn't exist
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS users (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL
        );
      `;


      return createTable;

    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}

async function main() {
  const client = await db.connect();

  await createUsers(client);
  
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});