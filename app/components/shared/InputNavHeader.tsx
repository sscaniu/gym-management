/* This component is used at the top of pages that are used to gather input like adding gyms or trainers */
"use client";

import { Button, ButtonStyles } from "./Buttons"
import { rubik } from "./font";

export default function InputNavHeader(
    {
        name,
        description,
        buttonLeftLabel,
        buttonRightLabel,
        hrefLeft,
        hrefRight
    }: {
        name: string,
        description: string,
        buttonLeftLabel: string,
        buttonRightLabel: string,
        hrefLeft?: string,
        hrefRight?: string
    }

) {


    return (
        <>

            <div className={`${rubik.className} text-white grid grid-cols-2 grid-rows-2 bg-card-blue-500`}>
                <div className="text-2xl">{name}</div>

                <div className="flex justify-end">
                    <Button
                        text={buttonLeftLabel}
                        style={ButtonStyles.Secondary}
                        width={"w-[200px]"}
                        href={hrefLeft}
                        addCSS={"mr-5"}
                    />
                    <Button
                        text={buttonRightLabel}
                        style={ButtonStyles.Primary}
                        width={"w-[200px]"}
                        href={hrefRight}
                    />

                </div>
                <div className="text-base">{description}</div>
                <div></div>

            </div>

        </>

    )


}