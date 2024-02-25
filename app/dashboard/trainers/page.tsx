/*Interface to add a new Trainers to an account*/
"use client";
import InputNavHeader from "@/app/components/shared/InputNavHeader"
import { DataInputTable, FieldConfig, InputType } from "@/app/components/shared/DataInputTable"

export default function CreateTrainer() {

    const inputConfig = [
        {
            id: "1",
            label: "Trainer Name",
            placeholder: "",
            type: InputType.Text,
            name: "trainer_name"
        },
        {
            id: 2,
            label: "Trainer Specialty",
            placeholder: "",
            type: InputType.Text,
            name: "trainer_specialty" /* This should be an autocomplete vs dropdown */
        },
        {
            id: 3,
            label: "Associated Gyms",
            placeholder: "",
            type: InputType.Text,
            name: "associated_gyms" /* This should be an autocomplete vs dropdown */
        },
        {
            id: 4,
            label: "Email Address",
            placeholder: "",
            type: InputType.Text,
            name: "email_address"
        },
        {
            id: 5,
            label: "Trainer's Phone",
            placeholder: "",
            type: InputType.Text,
            name: "phone_number"
        }
    ] as FieldConfig[]


    return (

        <article className="flex-1 z-10 bg-gradient-to-b from-oxford-blue from-50% to-delft-blue to-50%">

            <div className="mx-[56px] my-10">

                <InputNavHeader
                    name={"Create Trainer Account"}
                    description={"Complete the fields below to add your trainer's profile"}
                />

                <DataInputTable
                    config={inputConfig}
                />

            </div>

        </article>

    )


}