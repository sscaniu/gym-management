"use client";
import InputNavHeader from "@/app/components/shared/InputNavHeader"
import { rubik } from "@/app/components/shared/font";

export default function ProfileReview() {

    return (


        <article className={`${rubik.className} flex-1 z-10 bg-gradient-to-b bg-delft-blue`}>

            <div className="mx-[56px] my-10 opacity-75">

                <InputNavHeader
                    name={"Gym Profile Review"}
                    description={"Review the gym profile info below. If this is correct, click \"Finish\""}
                    buttonLeftLabel={"Previous"}
                    buttonRightLabel={"Finish"}
                    hrefLeft="./locationsize"
                    hrefRight=""
                />


                <div className="w-[580px] h-[342px] bg-oxford-blue dropshadow-2xl grid grid-cols-1 text-white p-5">
                    <div className="text-2xl border-b-2">Gym Profile Info</div>
                    <div className="mt-2"><span>Gym Name:&nbsp;</span>Brooklyn Body Works</div>
                    <div><span className="font-bold">Gym Phone:&nbsp;</span>718-223-4582</div>
                    <div><span className="font-bold">Address:&nbsp;</span>123 Main Street, Apt 3, Brooklyn, New York 11217</div>
                    <div><span className="font-bold">Location Size:&nbsp;</span>Medium</div>
                    <div><span className="font-bold">Staff Size:&nbsp;</span>2-4</div>
                    <div><span className="font-bold">Gym Specialty:&nbsp;</span>Crossfit</div>


                </div>

            </div>




        </article>

    )

}