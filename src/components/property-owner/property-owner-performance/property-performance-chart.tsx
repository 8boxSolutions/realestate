import { PropertyChart } from "../property-owner-home/property-chart";

function PropertyPerformanceChart() {
    return (
        <>
            <div className="bg-white mx-5 mt-5 rounded-2xl mb-5">
                <div className="flex flex-col lg:flex-row w-full">
                    {/* Left Side */}
                    <div className="relative w-full lg:w-2/5 m-10">
                        <div className="bg-gray-50 p-3 rounded-2xl w-fit justify-center inline-flex gap-2 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>
                            <div className="text-sm flex items-center">This Week</div>
                        </div>
                        <h1 className="pt-5">P37.5k</h1>
                        <div className="inline-flex w-full items-center gap-2">
                            <p className="text-md text-gray-500">Earnings</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                            <p className="text-red-500 text-xs">+2.45%</p>
                        </div>
                        <div className="text-red-500 inline-flex pt-5 gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p className="text-md font-bold">On track</p>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="relative w-full lg:w-3/5 p-5 flex items-center justify-center">
                        <PropertyChart />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyPerformanceChart;