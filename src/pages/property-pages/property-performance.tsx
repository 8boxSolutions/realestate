import PropertyPerformanceLeft from "@/components/property-owner/property-owner-performance/property-performance-left";
import PropertyPerformanceMiddleHeader from "@/components/property-owner/property-owner-performance/property-performance-middle-header";
import PropertyPerformanceRight from "@/components/property-owner/property-owner-performance/property-performance-right";

const PropertyPerformance = () => {
    return (
        <>
            <div className="inline-flex w-full flex-col lg:flex-row">
                {/* Left Side */}
                <PropertyPerformanceLeft />
                {/* Middle */}
                <div className="relative w-full lg:w-5/10 bg-gray-50 h-full">
                    <PropertyPerformanceMiddleHeader />
                    <h1 className="p-5">You have recieved 125 inquiries this month</h1>
                </div>
                {/* Right Side */}
                <PropertyPerformanceRight />
            </div>
        </>
    )
}   

export default PropertyPerformance;