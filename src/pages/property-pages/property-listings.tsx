import PropertyListingCards from "@/components/property-owner/property-owner-listing/property-listing-cards";
import PropertyListingHeader from "@/components/property-owner/property-owner-listing/property-listing-header";

const PropertyListings: React.FC = () => {
    return ( 
        <>
            <PropertyListingHeader />
            <PropertyListingCards />
            <div className="inline-flex w-full justify-between">
                <div className="border-2 border-red-400 w-fit h-fit m-15 rounded-sm p-3 cursor-pointer">
                    <p className="font-bold text-red-500">Approval Listing</p>
                </div>
                <div className="bg-red-500 w-fit h-fit m-15 rounded-sm p-3 cursor-pointer">
                    <p className="font-bold text-white">Add new listing</p>
                </div>
            </div>
        </>
    );
}   

export default PropertyListings;