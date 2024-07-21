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


/*Test Gyms*/
async function seedGyms() {

  const result = await prisma.gym.create({
    data: 
      {
        name:'Brooklyn Body Works',
        street_1: '123 Main Street',
        street_2:'Apt 3',
        city:'Brooklyn',
        state:'New York',
        zip: "11217",
        client_size: "Medium",
        training_staff_size:'Medium',
        locations:{
          create: [
            {
              name:'Primary Location',
              street_1:'123 Main Street',
              street_2:'Apt 3',
              city:'Brooklyn',
              state:'New York',
              zip: "11217",
              client_size:'Medium',
              specialty:'Crossfit'
            }
          ]
        },
        users: {
          connect: {
            id:"410544b2-4001-4271-9855-fec4b6a6442a"
           }
        }
        
  
      }
    
  });

  console.log(JSON.stringify(result));
  disconnect();

  return result;

}

async function seedTrainers(gymId) {
  const result = await prisma.trainer.create({
    data: 
      {
        email:'tomjones@gmail.com',
        first_name:'Tom',
        last_name: 'Jones',
        street_1:'124 Spring St',
        street_2:'',
        city:'New York',
        state:'NY',
        zip:'11101',
        phone1:'+1555555555',
        phone2:'',
        specialty: 'Strength',
        gym:{
          connect:{
             id: gymId
            }
        }
      }
    });

  const result2 = await prisma.trainer.create({
    data: 
      {
        email:'samsmith@gmail.com',
        first_name:'Sam',
        last_name: 'Smith',
        street_1:'521 Broadway',
        street_2:'Apt 4a',
        city:'New York',
        state:'NY',
        zip:'10128',
        phone1:'+1555555555',
        phone2:'',
        specialty: 'Crossfit',
        gym:{
          connect:{ id:gymId}
        }
      }
  });

  console.log(JSON.stringify(result));
  disconnect();

  return result;

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

async function deleteAll() {
  const clients = prisma.client.deleteMany({});
  const trainer = prisma.trainer.deleteMany();
  const location = prisma.location.deleteMany();
  const messages = prisma.message.deleteMany();
  const gyms = prisma.gym.deleteMany();
  

  await prisma.$transaction([messages, trainer, location, gyms, clients]);
}

async function seedClients(trainerId,gymId) {

  const data = [{
    first_name: "Suji",
    last_name: "Muse",
    email: "smuse@gmail.com",
    street_1: "1234 Jones St",
    city: "New York",
    state: "NY",
    zip: "10128",
    phone1: "+19142221213",
    contact_preference: "phone1",
    trainers: {
      connect: {
        id:trainerId
      }
    },
    gyms: {
      connect: {
        id: gymId
      }
    }
  },
  {
    first_name: "Amber",
    last_name: "McKee",
    email: "amkee@gmail.com",
    street_1: "1024 Smith Ct",
    city: "Brooklyn",
    state: "NY",
    zip: "11102",
    phone1: "+19142221215",
    contact_preference: "phone1",
    gyms: {
      connect: {
        id: gymId
      }
    }
  },
  {
    first_name: "Scott",
    last_name: "Hathaway",
    email: "sh@gmail.com",
    street_1: "339 E 90th",
    city: "New York",
    state: "NY",
    zip: "10128",
    phone1: "+15516893667",
    contact_preference: "phone1",
    trainers: {
      connect: {
        id:trainerId
      }
    },
    gyms: {
      connect: {
        id: gymId
      }
    }
  },
  {
    first_name: "Brent",
    last_name: "Coral",
    email: "br.coral@gmail.com",
    street_1: "111 Center Blvd",
    street_2: "Apt 2A",
    city: "Long Islan City",
    state: "NY",
    zip: "11101",
    phone1: "+19142221218",
    contact_preference: "phone1",
    gyms: {
      connect: {
        id: gymId
      }
    }
  }
  
  // {
  //   id: 3,
  //   name: "Brent  Coral",
  //   email: "br.coral@gmail.com",
  //   phone: "+1(646) 222-2622",
  //   location: "Queen’s Gym",
  //   trainer: {
  //     connect: {
  //       id:trainerId
  //     }
  //   },
  //   gym: {
  //     connect: {
  //       id: gymId
  //     }
  //   },
  //   last_session: "10/04/2023 11:45 PM",
  // },
  // {
  //   id: 4,
  //   name: "Kelly Lee",
  //   email: "kelly.lee@gmail.com",
  //   phone: "+1(202) 222-2222",
  //   location: "Queen’s Gym",
  //   gym: {
  //     connect: {
  //       id: gymId
  //     }
  //   },
  //   last_session: "10/05/2023 03:00 PM",
  // },
  // {
  //   id: 5,
  //   name: "June Parker",
  //   email: "june.walk@gmail.com",
  //   phone: "+1(916) 222-2222",
  //   location: "Brooklyn’s Studio",
  //   trainer: {
  //     connect: {
  //       id:trainerId
  //     }
  //   },
  //   gym: {
  //     connect: {
  //       id: gymId
  //     }
  //   },
  //   last_session: "10/05/2023 11:43 AM",
  // },
  // {
  //   id: 6,
  //   name: "Tanner Miller",
  //   email: "t.miller@gmail.com",
  //   phone: "+1(916) 222-2222",
  //   location: "Queen’s Gym",
  //   gym: {
  //     connect: {
  //       id: gymId
  //     }
  //   },
  //   last_session: "10/05/2023 04:43 PM",
  // },
  // {
  //   id: 7,
  //   name: "Von Smith",
  //   email: "v.smith@gmail.com",
  //   phone: "+1(916) 222-2222",
  //   location: "Queen’s Gym",
  //   trainer: {
  //     connect: {
  //       id:trainerId
  //     }
  //   },
  //   gym: {
  //     connect: {
  //       id: gymId
  //     }
  //   },
  //   last_session: "10/03/2023 05:00 PM",
  // },
  // {
  //   id: 8,
  //   name: "Sammy Ranger",
  //   email: "sammy0182@email.com",
  //   phone: "+1(916) 222-2222",
  //   location: "Brooklyn’s Studio",
  //   gym: {
  //     connect: {
  //       id: gymId
  //     }
  //   },
  //   last_session: "10/03/2023 05:00 PM",
  // },
  // {
  //   id: 9,
  //   name: "Walker Tejas",
  //   email: "walkertejas@email.com",
  //   phone: "+1(916) 222-2222",
  //   location: "Queen’s Gym",
  //   trainer: {
  //     connect: {
  //       id:trainerId
  //     }
  //   },
  //   gym: {
  //     connect: {
  //       id: gymId
  //     }
  //   },
  //   last_session: "10/06/2023 08:00 AM",
  // },
  // {
  //   id: 10,
  //   name: "Sammy Ranger",
  //   email: "sammy0182@email.com",
  //   phone: "+1(916) 222-2222",
  //   location: "Brooklyn’s Studio",
  //   gym: {
  //     connect: {
  //       id: gymId
  //     }
  //   },
  //   last_session: "10/03/2023 05:00 PM",
  // },
  // {
  //   id: 11,
  //   name: "Sammy Ranger",
  //   email: "sammy0182@email.com",
  //   phone: "+1(916) 222-2222",
  //   location: "Brooklyn’s Studio",
  //   gym: {
  //     connect: {
  //       id: gymId
  //     }
  //   },
  //   last_session: "10/03/2023 05:00 PM",
  // },
  // {
  //   id: 12,
  //   name: "Walker Tejas",
  //   email: "walkertejas@email.com",
  //   phone: "+1(916) 222-2222",
  //   location: "Queen’s Gym",
  //   gym: {
  //     connect: {
  //       id: gymId
  //     }
  //   },
  //   last_session: "10/06/2023 08:00 AM",
  // },
  // {
  //   id: 13,
  //   name: "Sammy Ranger",
  //   email: "sammy0182@email.com",
  //   phone: "+1(916) 222-2222",
  //   location: "Brooklyn’s Studio",
  //   gym: {
  //     connect: {
  //       id: gymId
  //     }
  //   },
  //   last_session: "10/03/2023 05:00 PM",
  // };
  ];
  
  
  await prisma.client.create({
    data: data[0]
  });

  await prisma.client.create({
    data: data[1]
  });

  await prisma.client.create({
    data: data[2]
  });

  await prisma.client.create({
    data: data[3]
  });
      
  
}

async function main() {
  const client = await db.connect();

  deleteAll();

  await seedUsers(client);
  await seedMessages();
  const gymId = await seedGyms();
  const trainerid = await seedTrainers(gymId.id);
  await seedClients(trainerid.id, gymId.id);
  
  process.exit();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});