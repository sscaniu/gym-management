"use client"

import { TypeSelections, TypeSelectionConfig } from "@/app/components/shared/TypeSelections";

export default function GymSpecialty() {

    const defaultConfig = [
        {
            id: "general",
            name: "General Fitness",
            description: "Traditional gym with weights and exercise machines",
            iconPath: "/UserCircle1.svg"
        },
        {
            id: "crossfit",
            name: "Crossfit",
            description: "High-intensity workouts like HIT, tabata, and boxing.",
            iconPath: "/UserCircle1.svg"
        },
        {
            id: "yoga",
            name: "Yoga",
            description: "Exercises that balance the mind and body.",
            iconPath: "/UserCircle1.svg"
        },
        {
            id: "other",
            name: "Other",
            description: "Your gym provides other kinds of fitness programs.",
            iconPath: "/UserCircle1.svg"
        }
    ]

    return (
        <article className="flex-1 z-10 bg-gradient-to-b from-oxford-blue from-50% to-delft-blue to-50%">
            <TypeSelections
                pageHeader={"Gym Specialty"}
                pageDescription={"Which of the following best describes this gym's fitness program?"}
                config={defaultConfig}
                leftHref="./gymlocation"
                rightHref="./locationsize"
            />
        </article>
    );


}