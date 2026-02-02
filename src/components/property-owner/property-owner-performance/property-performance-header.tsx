
function PropertyPerformanceHeader() {
    return (
        <>
            <h1 className="p-5">You have recieved 125 inquiries this month</h1>
            <div className="px-5 inline-flex w-full">
                <div className="inline-flex justify-start gap-22 w-full">
                    <h1 className="font-bold text-2xl">75.4%</h1>
                    <h1 className="font-bold text-2xl">99.46%</h1>
                </div>
                <div className="inline-flex justify-end w-full">   
                    <p className="text-blue-700 font-bold whitespace-nowrap cursor-pointer">Go to Performance</p>
                </div>
            </div>
            <div className="px-5 inline-flex w-full">
                <div className="inline-flex w-full gap-10 text-gray-400 justify-start">
                    <div>
                        <p>Inquiry-to-Sale</p>
                        <div className="bg-red-600 w h-1 mt-2"></div>
                    </div>
                    <p>Offer Acceptance Rate</p>
                </div>
                <div className="inline-flex w-full gap-10 justify-end text-xs">
                    <div className="inline-flex gap-2 items-center">
                        <div className="bg-red-600 w-2 h-2 rounded-full"></div>
                        <p>Your Listing</p>
                    </div>
                    <div className="inline-flex gap-2 items-center">
                        <div className="bg-gray-300 w-2 h-2 rounded-full"></div>
                        <p>Other Listing</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyPerformanceHeader;