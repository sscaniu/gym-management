/* This component is used at the top of pages that are used to gather input like adding gyms or trainers */
"use client";

import { Button, ButtonStyles } from "./Buttons"
import { rubik } from "./font";

export default function InputNavHeader(
    {
        name,
        description
        /*todo: add onclick*/
    }: {
        name: string,
        description: string
    }

) {


    return (


        <div className={`${rubik.className} text-white grid grid-cols-2 grid-rows-2 bg-card-blue-500`}>
            <div className="text-2xl">{name}</div>
            <div></div>
            <div className="text-base">{description}</div>


            <div className="flex justify-end">
                <Button
                    text={"Previous"}
                    style={ButtonStyles.Primary}
                    addCSS={"w-[100px] mr-5"}
                />
                <Button
                    text={"Next"}
                    style={ButtonStyles.Primary}
                    addCSS={"w-[100px]"}
                />

            </div>

        </div >



    )


}