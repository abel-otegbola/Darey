'use client'
import { Apple01Icon, Facebook01Icon, InstagramIcon, MasterCardIcon, PaypalIcon, TwitterIcon, VineSquareIcon } from "hugeicons-react";


function Footer() {
    return (
        <footer className="text-[#D9D9F2] mt-8">
            <div className="bg-[#000]/[0.95] flex flex-col items-center gap-[30px] py-[30px] md:px-[9%] px-[3%] pt-[60px] border border-transparent border-t-gray-700/[0.09] dark:border-t-gray-100/[0.09]">
                <h1 className="text-[32px]">Next js boilerplate</h1>
                <ul className="w-full">
                    <div className="flex flex-wrap gap-4 py-2 mb-4 justify-center">
                        <a href="https://facebook.com/" className="p-4 border border-gray-500/[0.4] rounded-full"><Facebook01Icon /></a>
                        <a href="https://twitter.com/" className="p-4 border border-gray-500/[0.4] rounded-full"><TwitterIcon /></a>
                        <a href="https://instagram.com/" className="p-4 border border-gray-500/[0.4] rounded-full"><InstagramIcon /></a>
                    </div>
                    <a href="mailto:suppercaseort@ennovate.com" className="block py-1 text-center">Support@boilerplate.com</a>
                    <div className="flex flex-wrap justify-center gap-4 py-4 text-[25px]">
                        <PaypalIcon className="text-blue-500"/>
                        <MasterCardIcon className="text-[#FF5F00]"/>
                        <VineSquareIcon className="text-[#1434CB]"/>
                        <Apple01Icon />
                    </div>
                </ul>
                <ul className="flex gap-[40px] justify-center">
                    <li className=""><a href="/" className="py-[5px] w-full">Home</a></li>
                    <li className=""><a href="/about" className="py-[5px] w-full">About</a></li>
                    <li className=""><a href="/shop" className="py-[5px] w-full">Shop</a></li>
                    <li className=""><a href="/contact" className="py-[5px] w-full">Contact Us</a></li>
                </ul>
            </div>
            <div className="bg-[#000] text-center">
                <p className="px-[3%] py-10 flex items-center gap-2 justify-center">Nextjs boilerplate &copy; Copyright  {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;