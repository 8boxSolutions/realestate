import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ClientHeader from '@/components/ClientHeader'; 
import Footer from '@/components/Footer'; 

const ClientLayout = () => {
  const location = useLocation();

  // Define all paths where the Footer should be HIDDEN
  const hideFooterPaths = [
    '/client-transaction', // Hides on Transaction List & Details
    '/client-messages'     // Hides on Messages
  ];

  // Check if current path starts with any of the paths above
  const shouldHideFooter = hideFooterPaths.some(path => 
    location.pathname.startsWith(path)
  );

  return (
    <div className="flex min-h-screen flex-col">
      <ClientHeader />

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Only show Footer if we are NOT on a hidden page */}
      {!shouldHideFooter && <Footer />}
    </div>
  );
};

export default ClientLayout;