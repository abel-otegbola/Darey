'use client'

import { useSession } from "next-auth/react";
import { WatchIcon } from "@phosphor-icons/react";


function DashboardHome() {
    const { data } = useSession()

    return (
        <>
            <div className="w-full">
                <div className="flex items-center bg-white gap-4 border-b-gray-500/[0.1] p-4">
                    <div className="">
                        <h1 className="text-[20px] font-semibold capitalize">Welcome back, <span className="Capitalize">{data?.user?.fullname?.split(" ")[0]}</span></h1>
                        <p className="leading-[180%] flex items-center  opacity-[0.7] gap-2"> <WatchIcon className="text-red-500 text-[14px]" />View your orders and discounts</p>
                    </div>
                    
                </div>

                
            </div>
        </>
    )
}

export default DashboardHome;