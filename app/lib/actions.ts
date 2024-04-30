"use server";

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
//import { Twilio } from "twilio";
import nodemailer from 'nodemailer';


//Oddly can't get these from the env
//const twilioClient: Twilio = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

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
        // const tmessage = await twilioClient.messages.create({ to: toNumber, from: process.env.TWILIO_PHONE_NUMBER, body: message });
        // console.log("SMS message sent", tmessage.sid);
        // Create transporter instance configured with your SMTP credentials
        var transporter = nodemailer.createTransport({
            service: 'gmail', // no need to set host or port etc.
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });

        // setup email data 
        var mailOptions = {
            from: 'gymbuddiesdev@gmail.com', // sender address
            to: `${toNumber}@vtext.com`, // list of receivers
            subject: 'Gymbuddies', // Subject line
            text: message, // plain text body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function (err, info) {
            if (err)
                console.log(err)
            else
                console.log(info);
        });
    } catch (error) {
        console.error("Error sending SMS", error);
        throw error;
    }


}
// export async function sendMessage(
//     formData: FormData

// ) {

//     //Not safe values could be empty
//     const toNumber = String(formData.get('to'))
//     const message = String(formData.get('message'));


//     try {
//         const tmessage = await twilioClient.messages.create({ to: toNumber, from: process.env.TWILIO_PHONE_NUMBER, body: message });
//         console.log("SMS message sent", tmessage.sid);
//     } catch (error) {
//         console.error("Error sending SMS", error);
//         throw error;
//     }


// }


