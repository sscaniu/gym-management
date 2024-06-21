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
            id: "pilates",
            name: "Pilates",
            description: "Exercises that can be performed on a mat or other equipment.",
            iconPath: "/UserCircle1.svg"
        },
        {
            id: "gymnastics",
            name: "Gymnastics",
            description: "Agility and coordination exercisese includes Artistic, Acrobatics, Rhythmic, Etc.",
            iconPath: "/UserCircle1.svg"
        },
        {
            id: "strongman",
            name: "Strongman",
            description: "High-intensity resistance training with functional movements patterns",
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
        <article className="flex-1 z-10 bg-gradient-to-b bg-delft-blue">
            <TypeSelections
                pageHeader={"Trainer Specialty"}
                pageDescription={"Which of the following choices best describes this trainer’s speciality?"}
                config={defaultConfig}
                leftHref="./trainers"
                rightHref="./trainersprofile"
            />
        </article>
    );


}