"use client";

import { jost, rubik } from "../components/shared/font";
import Footer from "../components/shared/footer";
import LoginForm from "../components/shared/loginForm";

export default function Register() {
  return (
    <article className="flex-1 z-10 bg-delft-blue">

      <div className="mx-[56px] my-10">
        <div className="flex-1 bg-delft-blue">



          <div className="grid w-full h-full justify-items-center">

            <div className={`${rubik.className} mb-[25px] text-white text-xl font-bold`}>Welcome to Gymbuddies</div>

            <div className={`${jost.className} flex flex-col items-center content-center w-[456px] h-[569px] bg-card-blue-500/45`}>
            </div>

          </div>
        </div >
      </div>
    </article>
  );
}
