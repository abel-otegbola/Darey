import { UserData } from "@/interface/profile"
import { UserIcon } from "@phosphor-icons/react"
import Image from "next/image"

export default function Avatar({ user }: { user: UserData }) {

    if(user?.image) {
        return (
            <Image src={user?.image || ""} alt="user" width={32} height={32} className="rounded-full" />
        )
    }
    else {
       return <div className="flex items-center gap-1">
        <p className="bg-gray-500/[0.2] p-2 rounded-full">
            <UserIcon size={20} />
        </p>
        <p className="md:block hidden">Account</p>
        </div>
    }
}