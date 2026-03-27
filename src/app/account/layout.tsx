'use client'
import { ReactElement, useState } from "react";
import { GearIcon, HeartIcon, HouseIcon, Icon, ListMagnifyingGlassIcon, ShoppingBagIcon, SignOutIcon } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Avatar from "@/components/avatar/avatar";
import { signOut, useSession } from "next-auth/react";


export interface Link {
    id: number; label: string; icon: ReactElement<Icon>, link: string
}

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const { data } = useSession()
    const [open, setOpen] = useState(false)
    const pathname = usePathname();

    const generalLinks: Link[] = [
        { id: 0, label: "Dashboard", icon: <HouseIcon />, link: "/account" },
        { id: 1, label: "Orders", icon: <ShoppingBagIcon/>, link: "/account/orders" },
        { id: 2, label: "Wishlist", icon: <HeartIcon />, link: "/wishlist" },
        { id: 3, label: "Compare", icon: <ListMagnifyingGlassIcon />, link: "/compare" },
        { id: 4, label: "Settings", icon: <GearIcon />, link: "/settings" },
    ]

    return (
        <>
            <button className="md:hidden fixed top-[14px] md:right-9 right-7 md:p-2 z-[4]" onClick={() => setOpen(!open)}><Avatar user={data?.user || { fullname: "user" }} /></button>
            <div className="flex relative w-full my-1 min-h-[85vh] border-t border-gray-500/[0.1] overflow-hidden font-medium">
                <div className={`flex flex-col w-[280px] h-[88vh] md:sticky fixed md:top-0 top-[64px] py-4 md:px-2 right-0 bg-white border-x border-gray-500/[0.1] overflow-hidden z-[2] transition-all duration-700 ${open ? "translate-x-[0]": "md:translate-x-[0] translate-x-[130%]"}`}>  
                    <div className="flex flex-col">
                        {
                        generalLinks.map(link => {
                                return (
                                <Link key={link.id} href={ link.link} className={`flex items-center justify-between my-[2px] px-4 py-1 md:rounded ${pathname === link.link ? "bg-gray-500/[0.2] font-semibold" : " hover:bg-black/[0.1] hover:text-primary"}`}>
                                    <span className="w-[30px] text-lg opacity-[0.6]">{link.icon}</span>
                                    <span className="flex-1 py-2 break-normal">{link.label}</span>
                                </Link>
                                )
                        })
                        }
                    </div>
                    
                    <button onClick={() => signOut()} className={`w-full flex items-center my-[2px] px-4 py-1 hover:bg-black/[0.1] hover:text-primary rounded cursor-pointer`}>
                        <span className="w-[30px] text-lg opacity-[0.6]"><SignOutIcon /></span>
                        <span className="py-2 break-normal">Logout</span>
                    </button>
                </div>

                <div className="flex-1 md:p-8 md:py-8 p-6 mb-12">
                {
                    children
                }
                </div>
            </div>
        </>
    )    
}
