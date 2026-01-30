
function PropertyLeadsTable() {
    return (
        <>
            <div className="w-full px-15 my-5">
                <div className="grid grid-cols-8 gap-4 items-center bg-gray-200 text-sm p-2">
                    <div className="border-2 h-5 w-5 border-white"></div>
                    <p>Inquiry ID</p>
                    <p>Client Name</p>
                    <p>Property Details</p>
                    <p>Data Inquired</p>
                    <p>Scheduled Viewing</p>
                    <p>Property Value</p>
                    <p>Status</p>
                </div>

                <div className="grid grid-cols-8 gap-4 items-center text-sm p-2 cursor-pointer">
                    <div className="border-2 h-5 w-5 border-black"></div>
                        <p>IQ000000001235</p>
                        <p>Juan Dela Cruz</p>
                        <p>2BR Condo, 100sqm, Makati</p>
                        <p>January 10, 2025</p>
                        <p>January 20, 2025</p>
                        <p>₱10,000,000.00</p>
                        <div className="bg-yellow-300 w-fit px-3 py-1 rounded-full">
                            <p>Viewing Scheduled</p>
                        </div>
                </div>

                <div className="grid grid-cols-8 gap-4 items-center text-sm p-2 cursor-pointer">
                    <div className="border-2 h-5 w-5 border-black"></div>
                        <p>IQ000000001235</p>
                        <p>Juan Dela Cruz</p>
                        <p>2BR Condo, 100sqm, Makati</p>
                        <p>January 10, 2025</p>
                        <p>January 20, 2025</p>
                        <p>₱10,000,000.00</p>
                        <div className="bg-gray-300 w-fit px-3 py-1 rounded-full">
                            <p>Not Interested</p>
                        </div>
                </div>

                <div className="grid grid-cols-8 gap-4 items-center text-sm p-2 cursor-pointer">
                    <div className="border-2 h-5 w-5 border-black"></div>
                        <p>IQ000000001235</p>
                        <p>Juan Dela Cruz</p>
                        <p>2BR Condo, 100sqm, Makati</p>
                        <p>January 10, 2025</p>
                        <p>January 20, 2025</p>
                        <p>₱10,000,000.00</p>
                        <div className="bg-blue-300 w-fit px-3 py-1 rounded-full">
                            <p>Negotiation</p>
                        </div>
                </div>

                <div className="grid grid-cols-8 gap-4 items-center text-sm p-2 cursor-pointer">
                    <div className="border-2 h-5 w-5 border-black"></div>
                        <p>IQ000000001235</p>
                        <p>Juan Dela Cruz</p>
                        <p>2BR Condo, 100sqm, Makati</p>
                        <p>January 10, 2025</p>
                        <p>January 20, 2025</p>
                        <p>₱10,000,000.00</p>
                        <div className="bg-green-300 w-fit px-3 py-1 rounded-full">
                            <p>Closed</p>
                        </div>
                </div>

                <div className="grid grid-cols-8 gap-4 items-center text-sm p-2 cursor-pointer">
                    <div className="border-2 h-5 w-5 border-black"></div>
                        <p>IQ000000001235</p>
                        <p>Juan Dela Cruz</p>
                        <p>2BR Condo, 100sqm, Makati</p>
                        <p>January 10, 2025</p>
                        <p>January 20, 2025</p>
                        <p>₱10,000,000.00</p>
                        <div className="bg-purple-300 w-fit px-3 py-1 rounded-full">
                            <p>Requesting</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default PropertyLeadsTable;