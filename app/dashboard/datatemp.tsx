
"use server";


import { auth } from "../../auth"
import { getClientsForGym } from "../lib/data";

export default async function GetClients() {
    const session = await auth();

    if (session?.user?.email != null)
        var clients = await getClientsForGym(session?.user?.email);
    else
        clients = [];


    return (

        <div>

            {clients.map((client) => {

                return <div key={client.id}>
                    {client.name}
                </div>

            })}


        </div>

    )

}