import { storeContext } from "@/context/useStore";
import { currencyFormatter } from "@/helpers/currencyFormatter";
import { IProduct } from "@/interface/store";
import { HeartIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useContext } from "react";
import Button from "../button/button";

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
                        <HeartIcon className="text-[20px] text-gray-700/[0.3]" onClick={() => addToWishlist(product.id)} /> 
                        : 
                        <HeartIcon weight="fill" className="text-[20px] text-red-500"  onClick={() => removeFromWishlist(product.id)} />
                    }
                </div>
                
                <p className="text-[10px] w-fit opacity-[0.5] uppercase font-bold px-2 py-1 m-3 rounded bg-gray-500/[0.1]">{product?.condition}</p>
                <a href={`/product?id=${product.id}`} className="block px-3 leading-[130%] font-semibold">{product?.title}</a>
                <div className="flex flex-col gap-3 p-3 ">
                    <p className="font-bold text-lg text-primary">{currencyFormatter(+product?.price)} </p>

                    <div className="">
                    {
                        cart.map(item => item.id).indexOf(product.id) === -1 ? 
                            <Button className="w-full px-[16px]" onClick={() => addToCart({id: product.id ||  "0", quantity: 1, variation: { color: product.variations.colors[0].name, size: product.variations.size[0].name }}) }>Add to Cart</Button> 
                        : 
                            <Button variant="secondary" className="w-full px-[16px]" onClick={() => removeFromCart(product.id || "")}>Remove from Cart</Button>
                    }
                    </div>
                </div>
        </div>
    )
}