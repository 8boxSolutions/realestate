
function PropertyRightDetails() {
    return (
        <>
            <div className="inline-flex px-10 items-center justify-between w-full">
                <h1 className="text-center text-2xl font-bold">Inquiry / Buyer Details</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <div className="px-10 py-5 inline-flex">
                <div className="bg-red-700 w-20 h-20 rounded-full mr-5"></div>
                <div className="inline-flex flex-col gap-y-2">
                    <p className="text-red-600 font-bold">Active Lead</p>
                    <h4 className="font-bold">Mary Jane</h4>
                    <p className="text-sm">₱9,000,000 - ₱10,000,000</p>
                    <p className="text-sm">2BR Condo, Quezon City</p>
                </div>
            </div>
            <div className="bg-red-600 py-2 rounded-lg mx-10 cursor-pointer">
                <h5 className="text-white font-bold text-center">Schedule a meeting</h5>
            </div>

            <div className="inline-flex flex-col px-20 py-15 w-full gap-5">
                <div className="text-red-600 inline-flex gap-x-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <p className="text-sm">Account Verified</p>
                </div>
                <div className="inline-flex gap-x-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <p className="text-sm">Joined Real Estate in January 2020</p>
                </div>
                <div className="inline-flex gap-x-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <p className="text-sm">Lives in Quezon City, Philippines</p>
                </div>
                <p className="text-red-600 text-sm">See Profile</p>
            </div>
        </>
    )
}

export default PropertyRightDetails;