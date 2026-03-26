export default function InfiniteScroll({ text }: { text: string, }) {
    return (
        <div
            className="relative w-full gap-8 inline-flex flex-nowrap overflow-hidden"
        >
            <span className="w-8 h-7 bg-gradient-to-l to-[#101020] z-[6] absolute left-0 top-0"></span>
            {
                [0,1].map(item => (
                    <ul key={item} className="w-[1328px] flex items-center sm:text-[14px] text-[14px] justify-center gap-8 md:justify-start animate-infinite-scroll">
                        {
                            [0, 1, 2].map(innerItem => (
                                <li key={innerItem} className="min-w-[320px]">
                                    <p>{text}</p>
                                </li>
                            ))
                        }
                    </ul> 
                ))
            }            
            <span className="w-8 h-7 bg-gradient-to-r to-[#101020] z-[6] absolute right-0 top-0"></span>  
        </div>
    )
}