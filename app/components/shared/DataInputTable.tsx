/* Componenet designed to gather input from a user
The componet will lay out the input fields in a stacked table. 

Arguments:
config - Array of FieldConfig type JSON objects that represent an input field in the form.


*/

"use client";

import { rubik } from "./font";

export enum InputType {
    Text = "text",
    Email = "email"
}

export type FieldConfig = {
    id: string,
    label: string,
    placeholder: string,
    type: InputType,
    name: string,

    /*We eventually need what happens when you submit and the field that it matches in the API*/
}


export function DataInputTable(
    {
        inputTableHeader,
        config
    }: {
        inputTableHeader: string,
        config: FieldConfig[]
    }

) {

    return (
        <>
            <div className={`${rubik.className} w-[500px] col-span-1 rounded-lg bg-card-blue-500 text-white opacity-70 drop-shadow-xl opacity-75`}>
                <div className="border-5 border-white-500 border-solid">{inputTableHeader}</div>

                {
                    config.map((element) => (


                        <div key={element.id}>

                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                {element.label}
                            </label>
                            <div className="mt-2">
                                <input
                                    type={element.type}
                                    name={element.name}
                                    id={element.id}
                                    className="block w-[409px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder={element.placeholder}
                                />
                            </div>
                        </div>



                    ))
                }

            </div>
        </>

    )


}