import React from 'react';

interface searchProtertyProps {
	children: React.ReactNode;
	className?: string;
}

const SearchFilter: React.FC<searchProtertyProps> = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export default SearchFilter;
