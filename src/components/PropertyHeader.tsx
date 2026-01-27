import LogoLink from "@/components/LogoLink";
import PropertyNavigation from "@/components/navigation/Property-Navigation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeaderWrapperProps {
    className?: string;
    children?: ReactNode;
}

const HeaderWrapper = ({ className, children }: HeaderWrapperProps) => {
    return (
        <div className="rounded-full border-b bg-white shadow-sm">
            <div className={cn('flex h-20 items-center justify-between px-4', className)}>{children}</div>
        </div>
    );
};

const PropertyHeader: React.FC = () => {
    return (
        <>
            <div className="z-50 p-10">
                
                <HeaderWrapper className="flex items-center justify-between">
                    <LogoLink />
                    <PropertyNavigation />
                </HeaderWrapper>
            </div>
        </>
    )
};

export default PropertyHeader;