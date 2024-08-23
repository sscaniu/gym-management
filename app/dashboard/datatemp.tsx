"use server";

import { Session } from "next-auth";
import { SessionContextValue } from "next-auth/react";

export default async function GetClients({ session }: { session: Session | null }) {


    // const { data: session } = useSession();
    console.log("User " + session?.user);

    //This will work for a gym or a trainer
    // if (session?.user?.email != null)
    //    var clients = await getClients(session?.user?.email);
    // else
    //     clients = [];


    return (

        <div>

            {/* {clients.map((client) => {

                return <div key={client.id}>
                    {client.name}
                </div>

            })} */}


        </div>

    )

}