import PropertyLeadsHeader from "@/components/property-owner/property-owner-leads-transactions/property-leads-header";
import PropertyLeadsSearch from "@/components/property-owner/property-owner-leads-transactions/property-leads-search";
import PropertyLeadsTable from "@/components/property-owner/property-owner-leads-transactions/property-leads-table";

const PropertyLeadsTransactions: React.FC = () => {
    return (
        <>
            <PropertyLeadsHeader />
            <PropertyLeadsSearch />
            <PropertyLeadsTable />
        </>
    )   
}   

export default PropertyLeadsTransactions;