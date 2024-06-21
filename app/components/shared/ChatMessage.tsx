

export enum ChatStyle {
    Trainer = 1,
    Client = 2
}

export interface Message {
    id: string, speaker: string, message: string, time: string, style: ChatStyle
}


export function ChatMessage(message: Message) {

    return (
        // Setting the color single for now
        <div className="flex flex-row w-3/4  content-end">
            {/* <div className="w-[40px] h-[px] border-1 rounded-full text-black">{message.speaker}</div> */}
            <div className="w-full bg-button-1-bg h-[47px] p-2">{message.message}</div>
        </div>
    );


}