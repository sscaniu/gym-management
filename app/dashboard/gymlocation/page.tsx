/*Interface to add a new Gym to an account*/

import InputNavHeader from "@/app/components/shared/InputNavHeader"

export default function GymLocation() {

    return (

        <article className="flex-1 z-10 bg-gradient-to-b from-oxford-blue from-50% to-delft-blue to-50%">

            <div className="mx-[56px] my-10">

                <InputNavHeader
                    name={"Gym Location"}
                    description={"Complete the fields below to add your gym profile"}
                />
                <div className="text-white">
                    Stuff here
                </div>
            </div>

        </article>
    )


}