
function PropertyGreetings() {
    return (
        <div>
            <h1 className="text-center text-3xl font-bold px-5">Good Afternoon, John</h1>
            <div className="px-5 py-4">   
                <div className="mt-3 space-y-2 text-l px-10">
                    <div className="inline-flex justify-between w-full">
                        <p>Property Value Estimate:</p>
                        <p>P99999.00</p>
                    </div>
                    <div className="inline-flex justify-between w-full">
                        <p>Overall Ratings</p>
                        <p>99.46%</p>
                    </div>
                    <div className="inline-flex justify-between w-full">
                        <p>Monthly Inquiries</p>
                        <p>235</p>
                    </div>
                    <div className="inline-flex justify-between w-full">
                        <p>30-day Listing Views</p>
                        <p>643</p>
                    </div>
                </div>
            </div>  
        </div> 
    )
}

export default PropertyGreetings;