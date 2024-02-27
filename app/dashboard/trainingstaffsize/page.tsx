"use client"

import { TypeSelections, TypeSelectionConfig } from "@/app/components/shared/TypeSelections";

export default function TrainingStaffSize() {

    const defaultConfig = [
        {
            id: "individual",
            name: "Individual",
            description: "There is only 1 trainer working at this gym location.",
            iconPath: "/UserCircle1.svg"
        },
        {
            id: "up_to_5",
            name: "Up to 5",
            description: "There are up to 5 trainers working at this gym location.",
            iconPath: "/UserCircle1.svg"
        },
        {
            id: "6_to_12",
            name: "6 to 12",
            description: "There are up 6 to 12 trainers working at this gym location.",
            iconPath: "/UserCircle1.svg"
        },
        {
            id: "12_plus",
            name: "12+",
            description: "There are 12+ trainers working at this gym location.",
            iconPath: "/UserCircle1.svg"
        }
    ]

    return (
        <article className="flex-1 z-10 bg-gradient-to-b from-oxford-blue from-50% to-delft-blue to-50%">
            <TypeSelections
                pageHeader={"Training Staff Size"}
                pageDescription={"Which of the following choices best describes this gym's training staff size?"}
                config={defaultConfig} />
        </article>
    );


}