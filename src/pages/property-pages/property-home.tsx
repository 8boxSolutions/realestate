import PropertyCalendar from "@/components/property-owner/property-calendar";
import PropertyCard from "@/components/property-owner/property-card";

const PropertyHome: React.FC = () => {
    return (
        <> 
            <div className="inline-flex w-full">

                {/* Left Side */}
                <div className="relative size-1/3 h-full">
                    <div className="px-5 py-4 break-words"> 
                        <h1 className="text-center text-4xl font-bold">Good Afternoon, John</h1>
                        <div className="mt-3 space-y-2 text-lg px-10">
                            <p>Property Value Estimate: P99999.00</p>
                            <p>Overall Ratings 99.46%</p>
                            <p>Monthly Inquiries 235</p>
                            <p>30-day Listing Views 643</p>
                        </div>
                    </div>  
                    
                    <h1 className="text-left text-2xl pl-13">Calendar</h1>
                    
                    <div className="flex flex-col items-center justify-center">
                        
                        <PropertyCalendar />  
                    </div>
                </div>

                {/* Right Side */}
                <div className="relative size-2/3 h-full bg-muted">
                    <div className="text-3xl font-bold pl-10 pt-2">Overview</div>
                    {/* Card */}
                    <PropertyCard />
                </div>
            </div>
        </>
    )
};

export default PropertyHome;