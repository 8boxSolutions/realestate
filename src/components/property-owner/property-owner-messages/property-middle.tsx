
function PropertyMiddle() {
    return (
        <>
            {/* Black Message */}
            <div className="p-5">
                <div className="inline-flex justify-between w-full items-center">
                    <h1 className="text-2xl font-bold">Mary Jane</h1>
                    <div className="inline-flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1} stroke="red" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                        </svg>
                    </div>
                </div>
                <p className="text-gray-500">Quezon City, Philippines</p>
                <p className="text-gray-500">Recently viewed 2BR Condominium in Makati</p>
                <div className="inline-flex flex-col gap-y-2">
                    <div className="inline-flex">
                        <div className="bg-gray-950 w-full sm:w-2/3 h-full rounded-lg mt-5 ml-auto text-white p-5">
                            <div className="inline">
                                <p>Dear Mary Jane,</p>
                                <p className="py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>
                            </div>
                        </div>
                        <div className="inline-flex flex-col items-center ml-5">
                            <div className="bg-red-700 w-11 h-11 mt-5 rounded-full"></div>
                            <p>You</p>
                        </div>
                    </div>
                    <div className="pl-30">
                        <div className="inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <p className="text-gray-500 text-xs">10:01 AM</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Client Message */}
            <div className="inline-flex flex-col gap-y-2 px-5">
                <div className="inline-flex">
                    <div className="inline-flex flex-col">
                        <div className="bg-red-700 w-11 h-11 rounded-full mr-5"></div>
                        <p>Client</p>
                    </div>
                    <div className="bg-gray-50 shadow-2xl w-full sm:w-2/3 h-full rounded-lg mr-auto text-black p-5">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className="pr-30">
                    <div className="inline-flex items-end w-full justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <p className="text-gray-500 text-xs">10:01 AM</p>
                    </div>
                </div>
            </div>
            {/* My Messages */}
            <div className="inline flex-col">
                <div className="bg-gray-950 w-fit h-full rounded-lg mt-5 ml-auto text-white p-5 mr-20">
                    <p className="text-right">Would you like to schedule a property viewing?</p>
                </div>
                <div className="bg-gray-950 w-fit h-full rounded-lg mt-2 ml-auto text-white p-5 mr-20">
                    <p>What's your preffered budget?</p>
                </div>
                <div className="bg-gray-950 w-fit h-full rounded-lg mt-2 ml-auto text-white p-5 mr-20">
                    <p>Can you please confirm your contact number?</p>
                </div>
            </div>
            {/* Chat Input */}
            <div className="inline-flex gap-3 items-center w-full p-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                </svg>
                <div className="w-full border-2 border-gray-400 h-fit p-3 rounded-full">
                    <p>Write a message...</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
            </div>
        </>
    )
}

export default PropertyMiddle;