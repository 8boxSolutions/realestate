
function PropertyLeadsSearch() {
    return (
        <>
            <div className="flex mx-15 gap-5 justify-end ml-auto pt-5 w-full px-15">
                <div className="border-2 border-gray-400 w-full rounded-full inline-flex items-center justify-between px-5">
                    <p className="text-gray-400">Search</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="red" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <div>
                    <div className="inline-flex gap-4 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1} stroke="red" className="size-6 bg-red-300 rounded-full w-13 h-13 p-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                        <div className="w-35">
                            <p className="text-gray-400 text-xs">Portfolio Value</p>
                            <h3 className="font-bold">₱632.1K</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="inline-flex gap-4 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1} stroke="red" className="size-6 bg-red-300 rounded-full w-13 h-13 p-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                        </svg>
                        <div className="w-35">  
                            <p className="text-gray-400 text-xs">Potential Commision</p>
                            <h3 className="font-bold">₱54.4K</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="inline-flex gap-4 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1} stroke="red" className="size-6 bg-red-300 rounded-full w-13 h-13 p-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                        </svg>
                        <div className="w-35">
                            <p className="text-gray-400 text-xs">Inquiries Today</p>
                            <h3 className="font-bold">56</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyLeadsSearch;