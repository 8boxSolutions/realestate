import PropertyCalendar from "@/components/property-owner/property-owner-home/property-calendar";
import PropertyCard from "@/components/property-owner/property-owner-home/property-card";
import PropertyDiscover from "@/components/property-owner/property-owner-home/property-discover";
import PropertyGreetings from "@/components/property-owner/property-owner-home/property-greetings";
import PropertyNotification from "@/components/property-owner/property-owner-home/property-notification";
import PropertyPerformanceReview from "@/components/property-owner/property-owner-home/property-performance-review";
import PropertyRecentActivity from "@/components/property-owner/property-owner-home/property-recent-activity";

const PropertyHome: React.FC = () => {
    return (
        <> 
            <div className="inline-flex w-full flex-col lg:flex-row">
                {/* Left Side */}
                <div className="relative w-full lg:w-3/10 h-full break-words">
                    {/* Greetings */}
                    <PropertyGreetings />
                    {/* Recent Activity */}
                    <PropertyRecentActivity />
                    {/* Notifications */}
                    <PropertyNotification />
                    {/* Calendar */}         
                    <PropertyCalendar />  
                </div>

                {/* Right Side */}
                <div className="relative w-full lg:w-7/10 bg-gray-50 h-full">
                    {/* Card */}
                    <PropertyCard />
                    {/* Performance Review */}
                    <PropertyPerformanceReview />
                    {/* Discover */}
                    <PropertyDiscover />
                </div>
            </div>
        </>
    )
};

export default PropertyHome;