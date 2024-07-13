const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const { db } = require('@vercel/postgres');

const { hash } = require('bcrypt');

const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    first_name: 'Bob',
    last_name: 'Dylan',
    email: 'user@nextmail.com',
    password: '123456',
    phone:"5516893667"
  },
];

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, first_name, last_name, email, password, phone)
        VALUES (${user.id}, ${user.first_name}, ${user.last_name}, ${user.email}, ${hashedPassword}, ${user.phone})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      users: insertedUsers
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedMessages() {

  const result = await prisma.message.createMany({
    data: [
      {uuid:"123456",from:"+17632601953", to:"+15516893667",body:"hello there"},
      {uuid:"123457",from:"+15516893667",to:"+17632601953",body:"howdy"}
    ],
    skipDuplicates: true,    
  });

  console.log(JSON.stringify(result));
  disconnect();

}

async function disconnect() {
  try {
      await prisma.$disconnect();
  } catch (e) {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedMessages();
  
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});