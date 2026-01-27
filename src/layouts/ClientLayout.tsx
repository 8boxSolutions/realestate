// src/layouts/ClientLayout.tsx
import { Outlet } from 'react-router-dom';
import ClientHeader from '@/components/ClientHeader'; // Ensure this path is correct
import Footer from '@/components/Footer';

const ClientLayout = () => {
    return (
        <div className="flex min-h-screen flex-col">
            {/* This uses the Client Header */}
            <ClientHeader /> 
            
            <main className="flex-grow">
                <Outlet />
            </main>
        
            <Footer />
        </div>
    );
};

export default ClientLayout;