/**
 * Database functions
 */

"use server";

import { PrismaClient } from '@prisma/client'
import { UIClient } from './definitions';
import type { Client } from '@prisma/client';


const prisma = new PrismaClient();

/* Retreive messages for a specific number */
export async function getMessages(number: String) {
    //TODO: Build filter here
    const messages = await prisma.message.findMany();

    disconnect();

    return messages;
}

//Get the client list for a gym. Used in the Clients table
export async function getClientsForGym(gymId: string) {

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


    const clientStruct = clients.map((client) => {

        const value: UIClient = {
            id: client.id,
            name: client.first_name + " " + client.last_name,
            email: client.email,
            phone: client.phone1,
            location: client.sessions.length > 0 ? client.sessions[0].location.name : "",
            trainer: client.trainers.length > 0 ? client.trainers[0].first_name + ' ' + client.trainers[0].last_name : "",
            last_session: client.sessions.length > 0 ? client.sessions[0].start_time.toLocaleDateString() : ""
        }

        return value;

    });


    disconnect();

    return clientStruct;
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