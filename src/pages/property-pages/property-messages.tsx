import PropertyAllMessage from "@/components/property-owner/property-owner-messages/property-all-message";
import PropertyChat from "@/components/property-owner/property-owner-messages/property-chat";
import PropertyMiddle from "@/components/property-owner/property-owner-messages/property-middle";
import PropertyOtherChat from "@/components/property-owner/property-owner-messages/property-other-chat";
import PropertyRightDetails from "@/components/property-owner/property-owner-messages/property-right-details";

const PropertyMessages = () => {
    return (
        <> 
            <div className="inline-flex w-full flex-col lg:flex-row">
                
                {/* Left Side */}
                <div className="relative w-full lg:w-3/10 h-full break-words">
                    {/* Header */}
                    <PropertyAllMessage />
                    {/* Chats */}
                    <PropertyChat />
                    <PropertyOtherChat />
                    <PropertyOtherChat />
                    <PropertyOtherChat />
                    <PropertyOtherChat />
                    <PropertyOtherChat />
                    <PropertyOtherChat />
                </div>

                {/* Middle */}
                <div className="relative w-full lg:w-4/10 bg-gray-100 h-full">
                    <PropertyMiddle />
                </div>

                {/* Right Side */}
                <div className="relative w-full lg:w-3/10 h-full">
                    <PropertyRightDetails />
                </div>
            </div>
        </>
    )
}   

export default PropertyMessages;