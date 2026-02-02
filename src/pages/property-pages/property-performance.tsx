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
                </div>
                {/* Right Side */}
                <PropertyPerformanceRight />
            </div>
        </>
    )
}   

export default PropertyPerformance;