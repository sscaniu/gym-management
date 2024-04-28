"use server";

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { Twilio } from "twilio";


//Oddly can't get these from the env
const twilioClient: Twilio = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}


export async function sendMessage(
    formData: FormData

) {

    //Not safe values could be empty
    const toNumber = String(formData.get('to'))
    const message = String(formData.get('message'));


    try {
        const tmessage = await twilioClient.messages.create({ to: toNumber, from: process.env.TWILIO_PHONE_NUMBER, body: message });
        console.log("SMS message sent", tmessage.sid);
    } catch (error) {
        console.error("Error sending SMS", error);
        throw error;
    }


}


