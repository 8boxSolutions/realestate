
const PropertyLeadsTransactions = () => {
    return (
        <>
            <div className="inline-flex w-full flex-col lg:flex-row">
                <div className="h-fit relative w-full lg:w-2/10 ml-15">
                    <h1 className="text-3xl font-bold">Leads & Transactions</h1>
                </div>
                <div className="w-full lg:w-6/10">
                    <div className="inline-flex gap-3">
                        <div className="bg-red-300 w-fit py-3 px-5 rounded-2xl">
                            <p className="text-sm font-bold text-red-600">All</p>
                        </div>
                        <div className="w-fit py-3 px-5 rounded-2xl">
                            <p className="text-sm font-bold text-gray-400">New Inquiry</p>
                        </div>
                        <div className="w-fit py-3 px-5 rounded-2xl">
                            <p className="text-sm font-bold text-gray-400">Schedule Viewing</p>
                        </div>
                        <div className="w-fit py-3 px-5 rounded-2xl">
                            <p className="text-sm font-bold text-gray-400">In Progress</p>
                        </div>
                        <div className="w-fit py-3 px-5 rounded-2xl">
                            <p className="text-sm font-bold text-gray-400">Close Deal</p>
                        </div>
                        <div className="w-fit py-3 px-5 rounded-2xl">
                            <p className="text-sm font-bold text-gray-400">Not Interested / Dropped</p>
                        </div>
                    </div>
                </div>
                <div className="relative w-full lg:w-2/10">
                    <div className="inline-flex flex-col lg:flex-row w-full justify-center">
                        <div className="inline-flex gap-7 mr-15 items-center">
                            <div className="border-2 border-black rounded-full py-3 px-5">
                                <p className="text-sm font-bold">Filter</p>
                            </div>
                            <p className="text-sm font-bold">Export</p>
                            <p className="text-sm font-bold">Print</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}   

export default PropertyLeadsTransactions;