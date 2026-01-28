
const PropertyCard = () => {
    return (
        <div>
            <div className="text-3xl font-bold pl-15 pt-3">Overview</div>
            <div className="px-15 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                <div className="bg-white h-60 w-full rounded-2xl shadow-xl flex flex-col items-center justify-center">
                    <h1 className="text-5xl pb-10">2</h1>
                    <p className="text-gray-400">Closed Sales</p>
                </div>
                <div className="bg-white h-60 w-full rounded-2xl shadow-xl flex flex-col items-center justify-center">
                    <h1 className="text-5xl pb-10">5</h1>
                    <p className="text-gray-400">New Listings</p>
                </div>
                <div className="bg-white h-60 w-full rounded-2xl shadow-xl flex flex-col items-center justify-center">
                    <h1 className="text-5xl pb-10">12</h1>
                    <p className="text-gray-400">In Progress</p>
                </div>
                <div className="bg-white h-60 w-full rounded-2xl shadow-xl flex flex-col items-center justify-center">
                    <h1 className="text-5xl pb-10">24</h1>
                    <p className="text-gray-400">Active Listings</p>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard;