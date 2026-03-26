'use client'

import ProductCard from "@/components/cards/productCard";
import { gadgets } from "@/data/products";

export default function Home() {
  
  return (
    <main className="">

      <div
        className={`flex flex-col md:h-[400px] h-[320px] duration-700 bg-cover bg-center bg-no-repeat`}
        style={{
            backgroundImage: `url("/bg1.png")`,
        }}
      >

      </div>

      <section className="md:px-[8%] px-4 py-[20px]">
        <h1 className="md:text-[64px] w-[70%] text-[32px] font-bold py-6">BEST DEALS ON IPHONES</h1>
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
