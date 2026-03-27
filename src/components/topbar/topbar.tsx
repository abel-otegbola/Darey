'use client'
import { useContext, useEffect, useState } from "react"
import Link from "next/link"
import { ShoppingCartIcon, XIcon } from "@phosphor-icons/react"
import Avatar from "../avatar/avatar"
import { usePathname } from "next/navigation"
import Search from "../search/search"
import { storeContext } from "@/context/useStore"
import { useSession } from "next-auth/react"
import { useOutsideClick } from "@/helpers/useClickOutside"
import InfiniteScroll from "../slider/infinitescroll"

function Topbar() {
    const { cart } = useContext(storeContext)
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    const { data } = useSession()

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
    })
    
    const accountPages = ["dashboard", "admin", "agent"]

    const closeMenu = useOutsideClick(setOpen, false)


    return (
        <>
        <div className={`bg-[#101020] text-[12px] text-white/[0.5] flex items-center justify-center p-3 ${accountPages.includes(pathname.split("/")[1]) ? "md:px-10 md:py-2 py-5" : "md:px-[8%] px-3"}`}>
            <InfiniteScroll text={"Free shipping available for all phones"} />
        </div>
        <div className={`flex w-full justify-between items-center bg-gray-900 py-3 text-white backdrop-blur-sm z-[3] ${accountPages.includes(pathname.split("/")[1]) ? "md:px-10 pl-6 pr-[100px] md:py-2 py-5" : "md:px-[8%] px-6"}`}>
            <div className="flex items-center gap-8">
                <Link href="/" className="w-[70px] rounded flex justify-center items-center font-medium">
                    <p className="tracking-[5px] text-[16px]">DAREY</p>
                </Link>
                    <nav className={`
                        md:flex hidden md:flex-row flex-col md:items-center md:gap-2 lg:gap-4
                        md:static fixed top-0 right-0 md:z-auto z-[10]
                        md:w-auto w-full sm:w-[320px]
                        md:h-auto h-screen
                        md:bg-transparent bg-gray-900
                        md:shadow-none shadow-xl
                        md:p-0 py-3 px-6 pb-6
                        md:translate-x-0 md:opacity-100 ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}
                        transition-opacity duration-500 ease-in-out
                    `}>
                        <p className="tracking-[5px] text-[16px] md:hidden pb-5 pt-2">DAREY</p>
                        {
                            [
                                { id: 0, title: "Shop", href: "/shop" },
                                { id: 1, title: "Cart", href: "/cart" },
                                { id: 2, title: "Wishlist", href: "/wishlist" },
                            ].map(link => (
                                <div key={link.id} className="md:px-0 md:py-0">
                                    <Link
                                        href={link.href} 
                                        className={`font-medium lg:px-3 md:p-2 py-6 duration-200 block w-full md:border-none border-t border-gray-500/[0.2]
                                            hover:text-primary
                                        `}
                                    >
                                        {link.title}
                                    </Link>
                                </div>
                            ))
                        }
                    </nav>
            </div>

           

            <div className="flex gap-8 items-center">
                <Search placeholder="Search products" className="md:flex hidden" />
                <Link href="/cart" className="relative">
                    <ShoppingCartIcon weight="light" size={20}/>
                    <span className="absolute text-[8px] -top-2 -right-2 px-1 py-0 rounded-full bg-green-600 text-white">{cart.length}</span>
                </Link>
                <div ref={closeMenu} className={`relative ${accountPages.includes(pathname.split("/")[1]) ? "md:block hidden" : "block"}`}>
                    <button className="h-[40px]">
                        <Avatar user={data?.user || { fullname: "user" }} />
                    </button>
                </div>
                 {/* Hamburger menu button */}
                <button 
                    className="md:hidden flex flex-col justify-center items-end gap-1 w-10 h-10 z-[1000] relative" 
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <span className={`w-5 h-0.5 bg-gray-200/[0.6] rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
                    <span className={`w-3 h-0.5 bg-gray-200/[0.6] rounded-full transition-all duration-300 ${open ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}></span>
                    <span className={`w-5 h-0.5 bg-gray-200/[0.6] rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                </button>
            </div>
        </div>

        <nav className={`
            md:hidden flex flex-col text-white
            fixed top-0 right-0 md:z-auto z-[10]
            w-full sm:w-[320px]
            h-screen
            bg-gray-900
            shadow-xl
            py-3 px-6 pb-6
            ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}
            transition-opacity duration-500 ease-in-out
        `}>
            <div className="flex justify-between items-center md:hidden pb-5 pt-2">
                <p className="tracking-[5px] text-[16px]">DAREY</p>
                <button onClick={() => setOpen(false)}><XIcon size={20} /></button>
            </div>
            {
                [
                    { id: 0, title: "Shop", href: "/shop" },
                    { id: 1, title: "Cart", href: "/cart" },
                    { id: 2, title: "Wishlist", href: "/wishlist" },
                ].map(link => (
                    <div key={link.id} className="md:px-0 md:py-0">
                        <Link
                            href={link.href} 
                            className={`font-medium lg:px-3 md:p-2 py-6 duration-200 block w-full md:border-none border-t border-gray-500/[0.2]
                                hover:text-primary
                            `}
                        >
                            {link.title}
                        </Link>
                    </div>
                ))
            }
        </nav>
        </>
    )
}

export default Topbar;