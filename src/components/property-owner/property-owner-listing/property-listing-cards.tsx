
function PropertyListingCards() {
  return (
    <>
        <div className="px-15 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-2">
                <div className="bg-black h-80 w-full rounded-2xl shadow-xl flex flex-col items-center justify-center"></div>
                <div className="inline-flex justify-between w-full">
                    <p className="text-red-600 text-sm">Tagaytay, Philippines </p>
                    <div className="inline-flex gap-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24"  className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <p className="text-sm">4.9</p>
                    </div>
                </div>
                <h4 className="font-bold text-lg">House Number One</h4>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="font-bold">₱25,000,000.00</p>
            </div>
        </div>
    </>
  );
}

export default PropertyListingCards;