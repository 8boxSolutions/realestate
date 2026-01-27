
function PropertyNotification() {
    return (
        <div>
            <div className="px-13 pt-5">
                <div className="inline-flex justify-between w-full items-center">
                    <h1 className="text-2xl">Notifications</h1>
                    <p className="text-red-500 cursor-pointer">View All</p>
                </div>
            </div>
            <p className="text-left text-l pl-13 text-red-500 py-2 font-medium">1 New Notification(s)</p>
            <p className="pl-13 font-bold">New property inquiry received</p>
            <p className="px-13 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, set do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="py-3 px-13 text-gray-400">5m ago</p>
        </div>
    )
}

export default PropertyNotification;