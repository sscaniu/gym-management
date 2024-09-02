import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from 'zod';
import { compare } from "bcrypt-ts";
import { getUser } from './app/lib/data';


export const { handlers, signIn, signOut, auth } = NextAuth({
    callbacks: {

        authorized: async ({ request, auth }) => {

            const nextUrl = request.nextUrl;
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false;
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/dashboard', nextUrl));
            }

        }

    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user) return null;
                    const passwordsMatch = await compare(password, user.password);

                    if (passwordsMatch) return user;
                }

                console.log('Invalid credentials');
                return null;
            },
        }),
    ],
})







