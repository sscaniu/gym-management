
import { Suspense } from "react";
import GetClients from "./datatemp";

export default function Test() {


    return (
        <Suspense fallback={<div>Loading...</div>}>
            <GetClients />
        </Suspense>
    )

}

