
function PropertyOtherChat() {
    return (
        <>
            <div className="w h-35 mx-15 rounded-xl">
                <div className="inline-flex w-full">
                    <div className="relative w-full lg:w-2/10 h-full">
                        <div className="bg-red-700 w h-11 rounded-full m-2"></div>
                    </div>
                    <div className="relative w-full lg:w-9/10 h-full">
                        <div className="inline-flex w-full justify-between p-2">
                            <p>Mary Jane</p>
                            <p className="text-green-800 font-bold">Ongoing</p>
                        </div>
                        <p className="px-2 text-sm text-gray-500">You: Lorem ipsum dolor sit amet, consectetur...</p>
                        <p className="px-2 text-xs text-gray-400 py-2">January 1, 2025 - 2BR House, Makati</p>
                        <div className="inline-flex w-full justify-between">
                            <p className="px-2 text-xs text-gray-400">Read</p>
                            <p className="px-2 text-xs text-gray-400">10:04 AM</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyOtherChat;