'use client'

import Button from "@/components/button/button";
import ProductCard from "@/components/cards/productCard";
import { gadgets } from "@/data/products";

export default function Home() {
  
  return (
    <main className="">

      <header
        className="flex flex-col md:h-[540px] h-[360px] items-start justify-center bg-center bg-cover bg-norepeat bg-[url('/bg.png')]"
      >
        <div className="md:px-[8%] px-4 md:w-[800px] w-[60%] space-y-4">
          <h1 className="font-bold uppercase md:text-6xl sm:text-4xl text-3xl">Best Prices on Iphones</h1>
          <p className="font-semibold sm:block hidden">100% Original iPhones. Verified Quality.</p>
          <Button>Shop now</Button>
        </div>
      </header>

      <section className="md:px-[8%] px-4 py-[20px]">
        <h1 className="md:text-[64px] text-[32px] font-bold py-6 uppercase">Get best deals</h1>
      </section>

      <section className="md:px-[8%] px-4 py-[20px] grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        {
          gadgets.map(gadget => (
            <ProductCard key={gadget.id} product={gadget} />
          ))
        }
      </section>

      <section className="md:px-[8%] px-4 py-[20px]">
        <h1 className="md:text-[64px] w-[70%] text-[32px] font-bold py-6">Phones </h1>

        <div className="md:columns-3 columns-2 gap-6">
          <div className="md:h-[400px] h-[250px] rounded-[20px] mb-6 bg-slate-200 break-inside-avoid bg-[url('/iphone5.png')] bg-cover bg-center">

          </div>
          <div className="md:h-[600px] h-[300px] rounded-[20px] mb-6 bg-slate-200 break-inside-avoid bg-[url('/Smartwatch-new.png')] bg-cover bg-center">

          </div>
          <div className="md:h-[250px] h-[200px] rounded-[20px] mb-6 bg-slate-200 break-inside-avoid bg-[url('/powerbank.png')] bg-cover bg-center">

          </div>
          <div className="md:h-[350px] h-[350px] rounded-[20px] mb-6 bg-slate-200 break-inside-avoid bg-[url('/macbook.png')] bg-cover bg-center">

          </div>
        </div>
      </section>

    </main>
  );
}
