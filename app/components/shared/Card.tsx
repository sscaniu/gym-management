import { Button, ButtonStyles } from "./Buttons";
import { jost, rubik } from "./font";

export type LinkConfig = {
    text: string,
    href: string
}

export type ButtonConfig = {
    id: string | number,
    text: string,
    style: ButtonStyles,
    disabled?: boolean,
    href: string
}

export type CardConfig =
    {
        id: string | number,
        name: string,
        description: string,
        buttons?: ButtonConfig[],
        links?: LinkConfig[]
    }



export default function Card(
    {
        cardConfig
    }: {
        cardConfig: CardConfig
    }

) {

    return (


        <div
            className={`${jost.className} divide-y divide-gray-200 rounded-lg bg-card-blue-500 text-white drop-shadow-2xl opacity-1`}
        >
            <div className="px-4 py-5 sm:p-6">
                <h3 className={`${rubik.className} text-[24px] leading-6 border-b border-black-600 pb-5`}>
                    {cardConfig.name}
                </h3>
                <div
                    className={`${jost.className} mt-7 mb-7 max-w-xl text-sm`}
                    dangerouslySetInnerHTML={{
                        __html: cardConfig.description ? cardConfig.description : "",
                    }}
                />
                {cardConfig.buttons && (
                    <div className="mt-5 flex items-center justify-evenly">
                        {cardConfig.buttons.map((button) => (
                            <div key={button.id}>
                                <Button
                                    text={button.text}
                                    style={button.style}
                                    href={button.href}
                                    width={"w-[200px]"}
                                />
                            </div>
                        ))}
                    </div>
                )}

                {/*Add Links*/}

            </div>
        </div>

    )


}