import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';
// import twilio from 'twilio';

// const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  console.log('request body: ', body);
//   const twilioSignature = request.headers.get('X-Twilio-Signature');
//   const url = process.env.TWILIO_WEBHOOK_URL; // Set this in your .env file

//   const authToken = process.env.TWILIO_AUTH_TOKEN;
//   const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, authToken);

  // Validate the request is from Twilio
  const requestBody: any = {};
  for (const [key, value] of body.entries()) {
    requestBody[key] = value;
  }
  console.log("request body: ", requestBody);

//   const isValidRequest = twilioClient.validateRequest(
//     authToken!,
//     twilioSignature!,
//     url!,
//     requestBody
//   );

//   if (!isValidRequest) {
//     return NextResponse.json({ error: 'Invalid Twilio request' }, { status: 403 });
//   }

  try {
    // const message = await prisma.message.create({
    //   data: {
    //     body: requestBody.Body,
    //     from: requestBody.From,
    //     to: requestBody.To,
    //     direction: requestBody.Direction,
    //     media_uri: requestBody.MediaUrl0, // Assuming MediaUrl0 is the media URI
    //     twilio_sid: requestBody.MessageSid,
    //     status: requestBody.SmsStatus,
    //   },
    // });

    // console.log(message);

    return NextResponse.json({ success: true, message: 'Message stored successfully' });
  } catch (error) {
    console.error('Error storing message:', error);
    return NextResponse.json({ error: 'Failed to store message' }, { status: 500 });
  }
}