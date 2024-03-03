"use client";
import InputNavHeader from "@/app/components/shared/InputNavHeader"
import { rubik } from "@/app/components/shared/font";

export default function ProfileReview() {

    return (


        <article className={`${rubik.className} flex-1 z-10 bg-gradient-to-b from-oxford-blue from-50% to-delft-blue to-50%`}>

            <div className="mx-[56px] my-10 opacity-75">

                <InputNavHeader
                    name={"Trainer Profile Review"}
                    description={"Review the Trainer profile info below. If this is correct, click \"Finish\""}
                    buttonLeftLabel={"Previous"}
                    buttonRightLabel={"Finish"}
                    hrefLeft="./trainerspecialty"
                    hrefRight="./dashboard"
                />


                <div className="w-[580px] h-[342px] bg-oxford-blue dropshadow-2xl grid grid-cols-1 text-white p-5">
                    <div className="text-2xl border-b-2">Trainer Contact Info</div>
                    <div className="mt-2"><span>Trainer Name:&nbsp;</span>Mass Bro</div>
                    <div><span className="font-bold">Trainer Email:&nbsp;</span>massbro1995@aol.com</div>
                    <div><span className="font-bold">Trainer Phone:&nbsp;</span>718-223-4582</div>
                    <div><span className="font-bold">Trainer Address:&nbsp;</span>123 Main Street, Apt 3, Brooklyn, New York 11217</div>
                </div>

                <div className="w-[580px] h-[342px] bg-oxford-blue dropshadow-2xl grid grid-cols-1 text-white p-5">
                    <div className="text-2xl border-b-2">Work Location</div>
                    <div className="mt-2"><span>Gym Name:&nbsp;</span>Brooklyn Body Works</div>
                    <div><span className="font-bold">Gym Phone:&nbsp;</span>718-223-4582</div>
                    <div><span className="font-bold">Address:&nbsp;</span>123 Main Street, Apt 3, Brooklyn, New York 11217</div>
                    <div><span className="font-bold">Location Size:&nbsp;</span>Medium</div>
                    <div><span className="font-bold">Staff Size:&nbsp;</span>2-4</div>
                    <div><span className="font-bold">Gym Specialty:&nbsp;</span>Crossfit</div>
                </div>

                <div className="w-[580px] h-[342px] bg-oxford-blue dropshadow-2xl grid grid-cols-1 text-white p-5">
                    <div className="text-2xl border-b-2">Trainer Specaility</div>
                    <div><span className="font-bold">Trainer Primary Specialty:&nbsp;</span>Weightlifting</div>
                    <div><span className="font-bold">Trainer Secondary Specialty:&nbsp;</span>Strongman</div>
                </div>

            </div>




        </article>

    )

}