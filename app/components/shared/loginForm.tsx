/*
* I actually don't think this needs to be in a component.
*/
'use client';

import { jost, rubik } from "./font"
import { Button, ButtonStyles } from "./Buttons"
import { useFormState, useFormStatus } from 'react-dom'
import { authenticate } from "@/app/lib/actions";

export default function LoginForm() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);


    return (
        <>
            <div className="flex-1 bg-delft-blue/0">

                <div className="grid w-full h-full justify-items-center">

                    <div className={`${rubik.className} mb-[25px] text-white text-4xl font-bold`}>Welcome to Gymbuddies</div>


                    <div className={`${jost.className} flex flex-col items-center content-center w-[456px] h-[569px] bg-card-blue-500/45 shadow-2xl `}>


                        {/*Google Login*/}
                        <button type="button" className={`bg-delft-blue w-11/12 my-[27px] text-white px-3.5 py-2.5 rounded font-semibold leading-6`}>
                            Quick Sign In With Google
                        </button>

                        <div className="text-white">Or</div>


                        <div className="w-11/12 mt-[27px]">

                            <form action={dispatch} className="w-full">

                                <label htmlFor="email" className="block text-sm font-semibold leading-4 text-white">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block h-[56px]  placeholder:text-white placeholder:text-[32px] bg-card-blue-500/45 w-full border-0 py-1.5 text-white shadow-sm ring-2 ring-inset ring-white  focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                        placeholder=""
                                    />
                                </div>

                                <label htmlFor="password" className="block text-sm font-semibold leading-4 text-white mt-[27px]">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="password"
                                        required
                                        className="block h-[56px]  placeholder:text-white placeholder:text-[32px] bg-card-blue-500/45 w-full border-0 py-1.5 text-white shadow-sm ring-2 ring-inset ring-white  focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                        placeholder=""
                                    />
                                </div>
                                <div className="mt-[27px] text-white underline"><a href="">Forgot your password</a></div>

                                <div className="grid place-items-center">
                                    <button type="submit" className="mt-[27px] h-[48px] w-[172px] gap-2 rounded-md p-3 text-sm font-medium hover:opacity-100 opacity-50 border-solid border-button-2-border border-2 text-button-2 bg-button-2-bg">Submit</button>
                                </div>
                                <div
                                    className="flex h-8 items-end space-x-1"
                                    aria-live="polite"
                                    aria-atomic="true"
                                >
                                    {errorMessage && (
                                        <>

                                            <p className="text-sm text-red-500">{errorMessage}</p>
                                        </>
                                    )}
                                </div>

                            </form>
                        </div>

                        <div className="flex items-center justify-center text-white text-sm mb-[5px]">Don&apos;t have an account yet?</div>

                        <button className={` bg-delft-blue w-11/12 text-white px-3.5 py-2.5 mb-[27px] rounded font-semibold leading-6`}>
                            Create an account
                        </button>


                    </div>


                </div>
            </div >
        </>
    )
}