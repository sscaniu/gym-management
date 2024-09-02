
import { auth } from "@/auth";
import { getClients } from "../../lib/data";

export default async function GetClients() {
    const session = await auth();


    //This will work for a gym or a trainer
    if (session?.user?.email != null)
        var clients = await getClients(session?.user?.email);
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