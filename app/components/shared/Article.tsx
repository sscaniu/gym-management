import { JsxElement } from "typescript"
import { rubik } from "./font"
import Image from "next/image"
import { ReactElement } from "react"

export default function Article(
    {
        title,
        topDiv
    }: {
        title: string,
        topDiv: ReactElement
    }
) {

    return (
        <>
            {/*Top Div contains SVG or color*/}
            {topDiv}

            {/*Bottom Div contains secondary colorr*/}
            < div className="flex-1 bg-delft-blue h-1/2" ></div >

            {/*Overlay Div contains cards*/}

            < div className="fixed inset-x-10 top-[100px] bottom-[130px] z-10" >
                <span className={`${rubik.className} font-bold text-white text-5xl`}>{title}</span>


                {/*Grid here*/}

            </div >
        </>
    )


}