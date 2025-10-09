import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components';
import { cn } from '@/lib/utils';
import React from 'react';

type NavigationBreadcrumbProps = {
	className?: string;
	separatorClassname?: string;
	list: string[];
};

const NavigationBreadcrumb = ({ className, separatorClassname, list }: NavigationBreadcrumbProps) => {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				{list.map((item, index) => (
					<React.Fragment key={index}>
						<BreadcrumbItem className={cn(className)}>
							<BreadcrumbLink>{item}</BreadcrumbLink>
						</BreadcrumbItem>
						{index < list.length - 1 && <BreadcrumbSeparator className={cn(separatorClassname)} />}
					</React.Fragment>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
};

export default NavigationBreadcrumb;
