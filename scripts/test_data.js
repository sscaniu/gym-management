const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


async function getUsers() {
    const users = await prisma.user.findMany();
    disconnect();

    console.log("Users" + JSON.stringify(users));
}

async function getGyms() {
    const gyms = await prisma.gym.findMany({
        include: {
            locations:true
        }
    });
    disconnect();

    console.log("Gyms" + JSON.stringify(gyms));
}

async function getTrainers() {
    const trainers = await prisma.trainers.findMany();
    disconnect();

    console.log("Trainers" + JSON.stringify(trainers));

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

async function getClientsForGym() {

    const gymId = await prisma.gym.findFirst().id;

    const clients = await prisma.client.findMany({
        where: {
            id: gymId
        },
        include: {
            trainers: true,
            sessions: {
                orderBy: {
                    start_time: 'desc'
                },
                take: 1,
                include: {
                    location: true
                }
            }
        }
    });

    console.log(JSON.stringify(clients));


    const clientStruct = clients.map((client) => {

        return {
            id: client.id,
            name: client.first_name + " " + client.last_name,
            email: client.email,
            phone: client.phone1,
            location: client.sessions.length > 0 ? client.sessions[0].location.name : "",
            trainer: client.trainers.length > 0 ? client.trainers[0].first_name + ' ' + client.trainers[0].last_name : "",
            last_session: client.sessions.length > 0 ? client.sessions[0].start_time : ""
        }

    });


    disconnect();

   

   console.log("Clients: "+JSON.stringify(clientStruct));

}

  //Entry point
  async function main() {
      
    // getUsers();
    // getGyms();
    // getTrainers();
    getClientsForGym();
    
  }
  
  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });
  