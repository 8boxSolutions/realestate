
function PropertyLeadsHeader() {
    return (
        <>
            <div className="inline-flex w-full flex-col lg:flex-row">
                <div className="h-fit relative w-full lg:w-2/10 ml-15">
                    <h1 className="text-3xl font-bold">Leads & Transactions</h1>
                </div>
                <div className="w-full lg:w-7/10">
                    <div className="inline-flex gap-3 px-3 mt-5">
                        <div className="bg-red-300 w-fit py-3 px-5 rounded-2xl cursor-pointer hover:bg-red-300 hover:text-red-600">
                            <p className="text-sm font-bold text-red-600">All</p>
                        </div>
                        <div className="w-fit py-3 px-5 rounded-2xl cursor-pointer hover:bg-red-300 hover:text-red-600">
                            <p className="text-sm font-bold text-gray-400">New Inquiry</p>
                        </div>
                        <div className="w-fit py-3 px-5 rounded-2xl cursor-pointer hover:bg-red-300 hover:text-red-600">
                            <p className="text-sm font-bold text-gray-400">Schedule Viewing</p>
                        </div>
                        <div className="w-fit py-3 px-5 rounded-2xl cursor-pointer hover:bg-red-300 hover:text-red-600">
                            <p className="text-sm font-bold text-gray-400">In Progress</p>
                        </div>
                        <div className="w-fit py-3 px-5 rounded-2xl cursor-pointer hover:bg-red-300 hover:text-red-600">
                            <p className="text-sm font-bold text-gray-400">Close Deal</p>
                        </div>
                        <div className="w-fit py-3 px-5 rounded-2xl cursor-pointer hover:bg-red-300 hover:text-red-600">
                            <p className="text-sm font-bold text-gray-400">Not Interested / Dropped</p>
                        </div>
                    </div>
                </div>
                <div className="relative w-full lg:w-2/10">
                    <div className="inline-flex flex-col w-full justify-center">
                        <div className="inline-flex gap-7 mr-15 items-center">
                            <div className="border-2 border-black rounded-full py-3 px-5 inline-flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                </svg>
                                <p className="text-sm font-bold">Filter</p>
                            </div>
                            <p className="text-sm font-bold">Export</p>
                            <p className="text-sm font-bold">Print</p>
                        </div>
                        <div className="inline-flex mt-5 mr-15 gap-5 items-center cursor-pointer w-fit ml-auto">
                            <div>
                                <p className="text-xs font-bold">Today, January 5, 2025</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyLeadsHeader;