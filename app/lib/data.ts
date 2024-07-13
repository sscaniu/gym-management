/**
 * Database functions
 */

"use server";

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

/* Retreive messages for a specific number */
export async function getMessages(number: String) {
    //TODO: Build filter here
    const messages = await prisma.message.findMany();

    disconnect();

    return messages;
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