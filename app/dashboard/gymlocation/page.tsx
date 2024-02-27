/*Interface to add a new Gym to an account*/
"use client";
import InputNavHeader from "@/app/components/shared/InputNavHeader"
import { DataInputTable, FieldConfig, InputType } from "@/app/components/shared/DataInputTable"

export default function GymLocation() {

    const inputConfig = [
        {
            id: "1",
            label: "GYM NAME",
            placeholder: "",
            type: InputType.Text,
            name: "gym_name"
        },
        {
            id: 2,
            label: "GYM PHONE",
            placeholder: "",
            type: InputType.Text,
            name: "gym_phone"
        },
        {
            id: 3,
            label: "STREET ADDRESS",
            placeholder: "",
            type: InputType.Text,
            name: "street_adddress"
        },
        {
            id: 4,
            label: "CITY",
            placeholder: "",
            type: InputType.Text,
            name: "city"
        },
        {
            id: 5,
            label: "ZIP",
            placeholder: "",
            type: InputType.Text,
            name: "zip"
        }
    ] as FieldConfig[]


    return (

        <article className="flex-1 z-10 bg-gradient-to-b from-oxford-blue from-50% to-delft-blue to-50%">

            <div className="mx-[56px] my-10">

                <InputNavHeader
                    name={"Gym Location"}
                    description={"Complete the fields below to add your gym profile"}
                />

                <DataInputTable
                    inputTableHeader="New Gym Info"
                    config={inputConfig}
                />

            </div>

        </article>

    )


}