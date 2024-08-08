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


    if (user != null && user != undefined) {

        var userData: UIUser = {
            id: user.id,
            name: user.first_name + ' ' + user.last_name,
            email: user.email,
            password: user.password,
            role: user.role == null ? 'trainer' : user.role,
            guid: user.gym.length > 0 ? user.gym[0].id : ''
        };

        return userData;

    } else
        return undefined;

}

/* Retreive messages for a specific number */
export async function getMessages(number: String) {
    //TODO: Build filter here
    const messages = await prisma.message.findMany();

    disconnect();

    return messages;
}

//Get the client list for a gym. Used in the Clients table
export async function getClientsForGym(email: string): Promise<UIClient[]> {

    const user = await getUser(email);


    const gym = await prisma.gym.findUnique({
        where: {
            id: user?.guid
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