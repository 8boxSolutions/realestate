
function PropertyAllMessage() {
    return (
        <>
            <div className="inline-flex px-15 items-center justify-between w-full">
                <h1 className="text-center text-3xl font-bold">All messages</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
            </div>
            <div className="inline-flex items-center gap-10 pb-5">
                <div className="inline-flex bg-red-500 ml-15 px-3 py-2 rounded-3xl items-center gap-3 mt-3">
                    <div className="text-white font-bold">All</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <p className="pt-2">Unread</p>
            </div>
        </>
    )
}

export default PropertyAllMessage;