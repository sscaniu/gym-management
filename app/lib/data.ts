/**
 * Database functions
 */

import { PrismaClient } from '@prisma/client'
import { UIClient, UIUser } from './definitions';

const prisma = new PrismaClient();

export async function getUser(email: string): Promise<UIUser | undefined> {

    const user = await prisma.user.findUnique({
        where: {
            'email': email
        },
        include: {
            gym: {
                select: {
                    id: true
                }
            }
        }

    });


    if (user != null && user != undefined && user.role === 'owner') {

        const userData: UIUser = {
            id: user.id,
            name: user.first_name + ' ' + user.last_name,
            email: user.email,
            password: user.password,
            role: user.role == null ? 'trainer' : user.role,
            guid: user.gym.length > 0 ? user.gym[0].id : ''
        };

        disconnect();
        return userData;

    } else if (user != null && user != undefined && user.role === 'trainer') {
        const userData: UIUser = {
            id: user.id,
            name: user.first_name + ' ' + user.last_name,
            email: user.email,
            password: user.password,
            role: user.role == null ? 'trainer' : user.role,
            guid: user.id
        };

        disconnect();
        return userData;
    } else {
        disconnect();
        return undefined;
    }

}

/* Retreive messages for a specific number */
export async function getMessages(number: String) {
    //TODO: Build filter here
    const messages = await prisma.message.findMany();

    disconnect();

    return messages;
}

export async function getClients(email: string): Promise<UIClient[]> {

    const user = await getUser(email);

    if (user?.role === 'owner') {
        return getClientsForGym(user.guid);
    }

    if (user?.role === 'trainer') {
        return getClientsForTrainer(user);
    }

    return [];

}

export async function getClientsForTrainer(trainer: UIUser): Promise<UIClient[]> {

    const clients = await prisma.client.findMany({
        where: {
            trainers: {
                some: {
                    id: trainer.id
                }
            }
        },
        include: {
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

    if (clients === null) {
        disconnect();
        return [];
    } else {

        const clientStruct: UIClient[] = clients.map((client) => {

            const neClient: UIClient = {
                id: client.id,
                name: client.first_name + " " + client.last_name,
                email: client.email,
                phone: client.phone1,
                location: client.sessions.length > 0 ? client.sessions[0].location.name : "",
                trainer: trainer.name,
                last_session: client.sessions.length > 0 ? client.sessions[0].start_time.toDateString() : ""
            }
            disconnect();
            return neClient;

        });


        disconnect();

        return clientStruct;
    }



}


//Get the client list for a gym. Used in the Clients table
export async function getClientsForGym(ownerGuid: string): Promise<UIClient[]> {

    const gym = await prisma.gym.findUnique({
        where: {
            id: ownerGuid
        },
        include: {
            clients: {
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
            }

        }
    });

    if (gym === null) {
        disconnect();
        return [];
    } else {

        const clientStruct: UIClient[] = gym.clients.map((client) => {

            const neClient: UIClient = {
                id: client.id,
                name: client.first_name + " " + client.last_name,
                email: client.email,
                phone: client.phone1,
                location: client.sessions.length > 0 ? client.sessions[0].location.name : "",
                trainer: client.trainers.length > 0 ? client.trainers[0].first_name + ' ' + client.trainers[0].last_name : "",
                last_session: client.sessions.length > 0 ? client.sessions[0].start_time.toDateString() : ""
            }

            return neClient;

        });


        disconnect();

        return clientStruct;
    }
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