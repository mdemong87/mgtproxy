import Image from "next/image";


export default function SingleDay({ img }) {
    return (
        <div className="w-full">
            <Image className="rounded-lg" src={img} height={`500`} width={`500`} alt="slide-image" />
        </div>
    )
}
