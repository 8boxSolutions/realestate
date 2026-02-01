import PropertyPerformanceLeft from "@/components/property-owner/property-owner-performance/property-performance-left";

const PropertyPerformance = () => {
    return (
        <>
            <div className="inline-flex w-full flex-col lg:flex-row">
                {/* Left Side */}
                <PropertyPerformanceLeft />
                {/* Middle */}
                <div className="relative w-full lg:w-5/10 bg-gray-100 h-100">
                </div>
                {/* Right Side */}
                <div className="relative w-full lg:w-3/10 h-100 bg-blue-800">
                </div>
            </div>
        </>
    )
}   

export default PropertyPerformance;