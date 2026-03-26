'use client'

import { FacebookLogoIcon, InstagramLogoIcon, XLogoIcon } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";


function Footer() {
    const pathname  = usePathname()

    return (
        <footer className={`bg-gray-900 border-t border-gray-500/[0.2] text-white md:mt-[100px] mt-8 ${pathname.indexOf("/dashboard") !== -1 ? "hidden" : ""}`}>
            <div className="grid md:grid-cols-4 grid-cols-2 items-start md:gap-[30px] gap-[60px] dark:bg-gray-500/[0.1] md:px-[8%] p-8 py-[60px]">
                <ul className="flex flex-col gap-[20px] justify-center">
                    <h2 className="font-semibold text-[16px]">NAVIGATIONS</h2>
                    <li className=""><a href="/" className="py-[5px] w-full">Shop</a></li>
                    <li className=""><a href="/about" className="py-[5px] w-full">About</a></li>
                    <li className=""><a href="/contact" className="py-[5px] w-full">Contact Us</a></li>
                </ul>
                <ul className="flex flex-col gap-[20px] justify-center">
                    <h2 className="font-semibold text-[16px]">SUPPORTS</h2>
                    <li className=""><a href="/" className="py-[5px] w-full">Customer Support</a></li>
                    <li className=""><a href="/about" className="py-[5px] w-full">FAQs</a></li>
                    <li className=""><a href="/" className="py-[5px] w-full">Privacy Policy</a></li>
                    <li className=""><a href="/contact" className="py-[5px] w-full">T&C</a></li>
                </ul>
                <ul className="flex flex-col gap-[20px] justify-center">
                    <h2 className="font-semibold text-[16px]">OFFERS</h2>
                    <li className=""><a href="/" className="py-[5px] w-full">New Buyer Code</a></li>
                    <li className=""><a href="/about" className="py-[5px] w-full">Christmas Promo code</a></li>
                </ul>
                <div className="flex flex-col gap-4">
                    <h1 className="text-[20px] font-bold">DaRey Gadgets</h1>
                    <a href="mailto:suppercaseort@ennovate.com" className="block py-1">Support@darey.com</a>
                    <ul className="">
                        <div className="flex flex-wrap gap-4 py-2 mb-4">
                            <a href="https://facebook.com/" className="p-2 border border-gray-500/[0.4] rounded-full"><FacebookLogoIcon size={18}/></a>
                            <a href="https://twitter.com/" className="p-2 border border-gray-500/[0.4] rounded-full"><XLogoIcon size={18}/></a>
                            <a href="https://instagram.com/" className="p-2 border border-gray-500/[0.4] rounded-full"><InstagramLogoIcon size={18}/></a>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-500/[0.2] text-center">
                <p className="px-[3%] py-10 flex items-center gap-2 justify-center">Darey &copy; Copyright  {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;