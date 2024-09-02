const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const { db } = require('@vercel/postgres');

const { hash } = require('bcrypt');



async function seedUsers() {
 
   
 const result1 =  await prisma.user.create({
    data: {
      first_name: 'Bob',
      last_name: 'Dylan',
      email:'user@nextmail.com',
      password: await hash('123456', 10),
      phone:"+15516893667",
      role:"owner"
    }
  }
)
 
await prisma.user.create({
  data: {
    first_name: 'Tom',
    last_name: 'Jones',
    email:'tom.jones@gmail.com',
    password: await hash('123456', 10),
    phone:"+15516893667",
    role:"trainer"
  }
}
)
  
  return result1;
}



/*Test Gyms*/
async function seedGyms(userId) {
console.log("OwnerId: "+userId);
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
            id: userId
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
  const users = prisma.user.deleteMany();
  const sessions = prisma.session.deleteMany();
  const clients = prisma.client.deleteMany({});
  const trainer = prisma.trainer.deleteMany();
  const location = prisma.location.deleteMany();
  const messages = prisma.message.deleteMany();
  const gyms = prisma.gym.deleteMany();
  
  

  const res = await prisma.$transaction([sessions, messages, trainer, location, gyms, clients, users]);
  console.log("Delete result"+JSON.stringify(res));
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
   
  ];
  
  
  const clientData = await prisma.client.create({
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
      
  return clientData;
  
}

async function seedSessions(clientId,trainerId) {

  const location = await prisma.location.findFirst();

  const sessions = [{
    client: {
      connect: clientId
    },
    start_time: new Date('July 21, 2024 08:00:00').toISOString(),
    end_time: new Date('July 21, 2024 09:00:00').toISOString(),
    type: "Strength",
    title: "Lifting with Arthur",
    Description: "Hour long training session for strength.",
    location: {
      connect: {
        id:location.id
      }
    },
    trainer: {
      connect: {
        id:trainerId.id
      }
    }
  },
  {
    client: {
      connect: clientId
    },
    start_time: new Date('July 22, 2024 08:00:00').toISOString(),
    end_time: new Date('July 22, 2024 09:00:00').toISOString(),
    type: "Crossfit",
    title: "Crossfit with Sam",
    Description: "Do all the crossfit things.",
    location: {
      connect: {
        id:location.id
      }
    },
    trainer: {
      connect: {
        id:trainerId.id
      }
    }
  }];

  const result = await prisma.session.create(
    {
      data: sessions[0]
    }
  )

  const result2 = await prisma.session.create(
    {
      data: sessions[1]
    }
  )

  console.log(result);

}

async function main() {
  
  await deleteAll();

  const owner = await seedUsers();
  const gymId = await seedGyms(owner.id);
  await seedMessages();
  const trainerid = await seedTrainers(gymId.id);
  const clientId = await seedClients(trainerid.id, gymId.id);
  await seedSessions(clientId, trainerid);
  
  process.exit();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});