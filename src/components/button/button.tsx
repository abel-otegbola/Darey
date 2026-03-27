import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

export interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "tetiary";
    className?: string;
    href?: string;
    size?: "full";
    disabled?: boolean,
    onClick?: () => void,
    children?: ReactNode
}

export default function Button({ variant, className, href, size, disabled, onClick, children, ...props }: buttonProps) {
    const variants = {
        primary: "hover:bg-[#000] text-white bg-black",
        secondary: "hover:bg-black hover:text-white text-black border-2 border-black",
        tetiary: "bg-gray-500/[0.09] hover:bg-gray-500/[0.2] border border-gray-500/[0.09] "
    }

    return (
        <button className={`duration-500 rounded-lg cursor-pointer font-semibold
            ${variants[variant || "primary"]}
            ${disabled ? "opacity-[0.25]" : ""}
            ${size === "full" ? "w-full" : "w-fit"}
            ${className} 
        `}
        {...props}
        name="Button"
        role="button"
        disabled={disabled}
        onClick={onClick}
        >
            { 
            href ? 
                <Link href={href} className="flex items-center justify-center md:gap-3 gap-2 md:py-3 md:px-6 px-3 py-2"> 
                    { children }
                </Link>
                :
                <span className="flex items-center justify-center md:gap-3 gap-2 md:py-3 md:px-6 px-3 py-2">{ children }</span>
            }
        </button>
    )
}