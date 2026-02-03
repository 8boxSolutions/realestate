
const PropertyCard = () => {
    return (
        <div className="space-y-4 px-10 py-5 space-between grid grid-cols-4 grid-rows-2 gap-6 text-center">
            <div className="bg-white h-60 w-55 rounded-2xl shadow-2xl flex flex-col items-center justify-center">
                <h1 className="text-5xl pb-10">2</h1>
                <p>Closed Sales</p>
            </div>
            <div className="bg-white h-60 w-55 rounded-2xl shadow-2xl flex flex-col items-center justify-center">
                <h1 className="text-5xl pb-10">5</h1>
                <p>New Listings</p>
            </div>
            <div className="bg-white h-60 w-55 rounded-2xl shadow-2xl flex flex-col items-center justify-center">
                <h1 className="text-5xl pb-10">12</h1>
                <p>In Progress</p>
            </div>
            <div className="bg-white h-60 w-55 rounded-2xl shadow-2xl flex flex-col items-center justify-center">
                <h1 className="text-5xl pb-10">24</h1>
                <p>Active Listings</p>
            </div>
        </div>
    )
}

export default PropertyCard;