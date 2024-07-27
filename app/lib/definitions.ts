// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type UIUser = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type UIClient = {
    id: string;
    name: string;
    email: string;
    phone: string;
    location: string;
    trainer: string | null;
    last_session: string;
}