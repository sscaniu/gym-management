/*Interface to selection location size*/
"use client";
import { TypeSelections, TypeSelectionConfig } from "@/app/components/shared/TypeSelections";

export default function LocationSize() {

    const defaultConfig = [
        {
            id: "small",
            name: "Small",
            description: "Membership size between 1-20 clients",
            iconPath: "/UserCircle1.svg"
        },
        {
            id: "medium",
            name: "Medium",
            description: "Membership size between 21-60 clients",
            iconPath: "/UserCircle1.svg"
        },
        {
            id: "large",
            name: "Large",
            description: "Membership size between 61-100+ clients",
            iconPath: "/UserCircle1.svg"
        }
    ]

    return (
        <article className="flex-1 z-10 bg-gradient-to-b from-oxford-blue from-50% to-delft-blue to-50%">
            <TypeSelections
                pageHeader={"Location Size"}
                pageDescription={"Which of the following choices best describes your gym's membership size?"}
                config={defaultConfig}
                leftHref="./gymspecialty"
                rightHref="./profilereview" />
        </article>
    );



}