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


  //Entry point
  async function main() {
      
    getUsers();
    
    getGyms();
    getTrainers();
    
  }
  
  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });
  