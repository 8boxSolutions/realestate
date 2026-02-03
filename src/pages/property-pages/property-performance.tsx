import { PropertyChart } from "@/components/property-owner/property-owner-home/property-chart";
import PropertyPerformanceChart from "@/components/property-owner/property-owner-performance/property-performance-chart";
import PropertyPerformanceHeader from "@/components/property-owner/property-owner-performance/property-performance-header";
import PropertyPerformanceLeft from "@/components/property-owner/property-owner-performance/property-performance-left";
import PropertyPerformanceNavigation from "@/components/property-owner/property-owner-performance/property-performance-navigation";
import PropertyPerformanceRight from "@/components/property-owner/property-owner-performance/property-performance-right";

const PropertyPerformance = () => {
    return (
        <>
            <div className="inline-flex w-full flex-col lg:flex-row">
                {/* Left Side */}
                <PropertyPerformanceLeft />
                {/* Middle */}
                <div className="relative w-full lg:w-5/10 bg-gray-50 h-full">
                    <PropertyPerformanceNavigation />
                    <PropertyPerformanceHeader />
                    <PropertyPerformanceChart />
                    <div className="mx-5 rounded-2xl mb-5" style={{height: "500px"}}>
                        <div className="inline-flex w-full">
                            <div className="bg-white w-1/2 mr-3 rounded-2xl">
                                <div className="inline-flex justify-between w-full px-5 pt-5">
                                    <p className="text-gray-500">Daily Traffic</p>
                                    <div className="inline-flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                        </svg>
                                        <p className="text-red-500 text-xs font-bold">+2.45%</p>
                                    </div>
                                </div>
                                <div className="inline-flex items-center pl-5">
                                    <h2 className="font-bold">2.579</h2>
                                    <p className="text-gray-500">Visitors</p>
                                </div>
                                <div className="p-5">
                                    <PropertyChart className="w-full h-48" />
                                </div>
                            </div>
                            <div className="bg-blue-400 w-1/2 ml-3 rounded-2xl">

                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <PropertyPerformanceRight />
            </div>
        </>
    )
}   

export default PropertyPerformance;