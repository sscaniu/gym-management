/*Interface to add a new Trainers to an account*/
"use client";
import WizardHeader from "@/app/components/shared/WizardHeader"
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
            label: "Associated Gyms",
            placeholder: "",
            type: InputType.Text,
            name: "associated_gyms" /* This should be an autocomplete vs dropdown. Pulled from Backend */
        },
        {
            id: 3,
            label: "Email Address",
            placeholder: "",
            type: InputType.Text,
            name: "email_address"
        },
        {
            id: 4,
            label: "Trainer's Phone",
            placeholder: "",
            type: InputType.Text,
            name: "phone_number"
        },
        {
            id: 5,
            label: "Trainer's Street Address",
            placeholder: "",
            type: InputType.Text,
            name: "street_address"
        },
        {
            id: 6,
            label: "Trainer's City",
            placeholder: "",
            type: InputType.Text,
            name: "trainer_city"
        },
        {
            id: 7,
            label: "Trainer's State",
            placeholder: "",
            type: InputType.Text,
            name: "trainer_state"
        },
        {
            id: 8,
            label: "Trainer's Zipcode",
            placeholder: "",
            type: InputType.Text,
            name: "trainer_zipcode"
        }
    ] as FieldConfig[]


    return (

        <article className="flex-1 z-10 bg-gradient-to-b bg-delft-blue">

            <div className="mx-[56px] my-10">

                <WizardHeader
                    name={"Create Trainer Account"}
                    description={"Complete the fields below to add your trainer's profile"}
                    buttonLeftLabel="Previous"
                    buttonRightLabel="Next"
                    hrefLeft="/dashboard"
                    hrefRight="./trainerspecialty"

                />

                <DataInputTable
                    inputTableHeader="New Trainer Info"
                    config={inputConfig}
                />

            </div>

        </article>

    )

}