import { storeContext } from "@/context/useStore";
import { currencyFormatter } from "@/helpers/currencyFormatter";
import { IProduct } from "@/interface/store";
import { Heart, ShoppingCartSimple } from "@phosphor-icons/react";
import Link from "next/link";
import { useContext } from "react";

export default function ProductCard({ product }: { product: IProduct }) {
    const { wishlist, addToWishlist, removeFromWishlist, cart, addToCart, removeFromCart } = useContext(storeContext)

    return (
        <div className={`flex flex-col relative md:mb-4 mb-2 pb-4 `}>
                <Link href={`/product?id=${product.id}`} >
                    <div  className="rounded-[10px] w-full aspect-square bg-gray-500/[0.1] bg-cover bg-center" style={{backgroundImage: `url("${product?.images[0]}")`}}>

                    </div>
                </Link>
                <div className="absolute top-3 right-3 cursor-pointer z-[2]">
                    {
                        wishlist.indexOf(product.id) === -1 ? 
                        <Heart className="text-[20px] text-gray-700/[0.3]" onClick={() => addToWishlist(product.id)} /> 
                        : 
                        <Heart weight="fill" className="text-[20px] text-red-500"  onClick={() => removeFromWishlist(product.id)} />
                    }
                </div>
                
                <p className="text-[10px] w-fit opacity-[0.5] uppercase font-bold px-2 py-1 m-3 rounded bg-gray-500/[0.1]">{product?.condition}</p>
                <a href={`/product?id=${product.id}`} className="block px-3 leading-[130%] font-semibold">{product?.title}</a>
                <div className="flex flex-wrap gap-3 justify-between items-center px-3 ">
                    <p className="font-bold text-lg text-primary">{currencyFormatter(+product?.price)} </p>

                    <div className="border border-gray-500/[0.1] rounded-full p-2 cursor-pointer z-[2]">
                    {
                        cart.map(item => item.id).indexOf(product.id) === -1 ? 
                        <ShoppingCartSimple className="text-[20px] text-gray-700/[0.3] dark:text-gray-100" onClick={() => addToCart({id: product.id, quantity: 1, variation: { color: "black", size: "LG" }})} /> 
                        : 
                        <ShoppingCartSimple weight="fill" className="text-[20px] text-primary"  onClick={() => removeFromCart(product.id)} />
                    }
                    </div>
                </div>
        </div>
    )
}