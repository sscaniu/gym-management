
import { jost } from "./font"

export default function LoginForm() {
    return (
        <>
            <div className="flex-1 bg-delft-blue">
                <div className="grid w-full h-full justify-items-center">
                    <div className={`${jost.className} flex flex-col items-center content-center w-[456px] h-[569px] bg-card-blue-500/45`}>

                        {/*Google Login*/}
                        <button className={` bg-delft-blue/45 w-11/12 my-[27px] text-white h-14 flex items-center justify-center rounded font-semibold leading-6`}>
                            Quick Sign In With Google
                        </button>

                        <div className="text-white">Or</div>

                        <div className="w-11/12 mt-[27px]">
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
                                    placeholder="@"
                                />
                            </div>
                        </div>

                        <div className="w-11/12 mt-[27px]">
                            <label htmlFor="password" className="block text-sm font-semibold leading-4 text-white">
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

                        </div>





                    </div>
                </div>
            </div >
        </>
    )
}