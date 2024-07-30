"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { Twilio } from "twilio";


const twilioClient: Twilio = new Twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);



export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function register(
  prevState: string | undefined,
  formData: FormData
) {
  const email = formData.get("email");
  if (email === "user@nextmail.com") {
    return "error";
  }
  return "success";
}

/* Sends a message using the Twilio API */
export async function sendMessage(formData: FormData) {
  //Not safe values could be empty
  const toNumber = String(formData.get("to"));
  const message = String(formData.get("message"));

  try {
    const tmessage = await twilioClient.messages.create({
      to: toNumber,
      from: process.env.TWILIO_PHONE_NUMBER,
      body: message,
    });
    console.log("SMS message sent", tmessage.sid);
  } catch (error) {
    console.error("Error sending SMS", error);
    throw error;
  }
}


