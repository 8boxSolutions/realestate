import PropertyCalendar from "@/components/property-owner/property-owner-home/property-calendar";
import PropertyCard from "@/components/property-owner/property-owner-home/property-card";
import PropertyGreetings from "@/components/property-owner/property-owner-home/property-greetings";
import PropertyNotification from "@/components/property-owner/property-owner-home/property-notification";
import PropertyRecentActivity from "@/components/property-owner/property-owner-home/property-recent-activity";

const PropertyHome: React.FC = () => {
    return (
        <> 
            <div className="inline-flex w-full">
                {/* Left Side */}
                <div className="relative size-1/3 h-full break-words">
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
                <div className="relative size-2/3 h-full bg-muted">
                    {/* Card */}
                    <PropertyCard />
                </div>
            </div>
        </>
    )
};

export default PropertyHome;