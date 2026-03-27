import { UserData } from "@/interface/profile"
import { UserIcon } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"

export default function Avatar({ user }: { user: UserData }) {

    if(user?.image) {
        return (
            <Image src={user?.image || ""} alt="user" width={32} height={32} className="rounded-full" />
        )
    }
    else {
       return <Link href="/dashboard" className="flex items-center gap-1">
        <p className="">
            <UserIcon size={20} />
        </p>
        <p className="md:block hidden text-sm font-semibold">Account</p>
        </Link>
    }
}