import PropertyAllMessage from "@/components/property-owner/property-owner-messages/property-all-message";
import PropertyChat from "@/components/property-owner/property-owner-messages/property-chat";
import PropertyOtherChat from "@/components/property-owner/property-owner-messages/property-other-chat";

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
                <div className="relative w-full lg:w-4/10 bg-gray-500 h-full">

                </div>

                {/* Middle */}
                <div className="relative w-full lg:w-3/10 h-full">
        
                </div>
            </div>
        </>
    )
}   

export default PropertyMessages;