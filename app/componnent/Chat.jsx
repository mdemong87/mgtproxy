import Image from "next/image";
import Link from "next/link";
import { default as chat, default as profile } from "../../public/chat.jpg";

export default function Chat() {
    return (
        <div className="bg-gray-500 text-gray-300 px-3 py-3 rounded-lg ">
            <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                    <Image className="w-14 ring-1 ring-sky-500 h-14 rounded-full" src={profile} width="400" height={`400`} alt="discord-profile" />
                    <h2 className="text-lg font-semibold">Hemlock</h2>
                </div>
                <Link className="text-md font-medium" href="#">Go to orginal</Link>
            </div>
            <div className="py-3 mx-16 px-2 text-md font-medium">
                <p>My first order arrived just now, the quality is pretty good! Already loving the silly custom approaches and looking forward to trying out my edh decks.</p>
            </div>
            <div className="mx-16 mb-4">
                <Image className="mt-3 h-64 w-56" src={chat} height="400" width="400" alt="discord-chat-ptoto" />
            </div>
        </div>
    )
}
