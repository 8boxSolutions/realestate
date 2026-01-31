
function PropertyListingHeader() {
    return (
        <>
            <div className="inline-flex w-full justify-between px-15 items-center">
                <div className="h-fit w-full lg:w-1/4">
                    <h1 className="text-3xl font-bold">Listing</h1>
                </div>
                <div className="h-13 w-full lg:w-1/2">
                    <div className="border-2 border-gray-400 h-full w-full rounded-full inline-flex items-center justify-between px-5">
                        <p className="text-gray-400">Searches Houses, Locations, Etc..</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="red" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                </div>
                <div className="w-full lg:w-1/4 justify-end flex">
                    <div className="border-2 border-black rounded-full py-3 px-5 inline-flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                        <p className="text-sm font-bold">Filter</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyListingHeader;