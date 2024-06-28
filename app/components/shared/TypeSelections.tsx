/*Page that offers selection for gym location size*/

"use client"
import Image from "next/image"
import { rubik } from "./font"
import WizardHeader from "./WizardHeader"




export type TypeSelectionConfig = {
    id: string,
    name: string,
    description: string,
    iconPath: string
}

export function TypeSelections(
    {
        pageHeader,
        pageDescription,
        config,
        leftHref,
        rightHref
    }: {
        pageHeader: string,
        pageDescription: string,
        config: TypeSelectionConfig[],
        leftHref?: string,
        rightHref?: string
    }

) {


    return (
        <div className="mx-[56px] my-10 ">
            <WizardHeader
                name={pageHeader}
                description={pageDescription}
                buttonLeftLabel="Previous"
                buttonRightLabel="Next"
                hrefLeft={leftHref}
                hrefRight={rightHref}

            />

            <div className="grid grid-flow-col  justify-items-center gap-4 auto-cols-min">


                {
                    config.map((element) => (


                        <div key={element.id} className="w-[266px] h-[304px]">
                            <div className="flex flex-1 flex-col p-8 text-center rounded-lg drop-shadow-2xl opacity-75  bg-oxford-blue">

                                <Image
                                    src={element.iconPath}
                                    width={120}
                                    height={120}
                                    alt={""}
                                    className={"mx-auto flex-shrik-0 rounded-full"}
                                />
                                <h3 className="mt-6 text-sm font-medium text-white">{element.name}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">

                                    <dd className="text-sm text-white">{element.description}</dd>


                                </dl>
                            </div>
                        </div>


                    ))
                }

            </div>
        </div>
    )

}