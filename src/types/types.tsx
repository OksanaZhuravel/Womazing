import { MouseEventHandler, ReactNode } from "react";

export interface ProductPromoProps {
	className: string;
	subtitle: string;
	limit: number;
}
export interface ProductProps {
	category: {
		id: number;
		name: string;
	};
	description: string;
	id: number;
	images: string[];
	price: number;
	title: string;
}

export interface formDataProps {
	name: string;
	email: string;
	phone: string;
	messange?: string;
}

export interface ProductItemProps {
	item: {
		category: {
			id: number;
			name: string;
		};
		description: string;
		id: number;
		images: string[];
		price: number;
		title: string;
	};
}

export interface TitleProps {
	title: string;
	activeTitle: string;
	activeLink: string;
}
export interface BreadcrumbsProps {
	category: {
		id: number;
		name: string;
	};
	title: string;
	className: string;
}

export interface ButtonProps {
	className: string;
	children: ReactNode;
	onClick: MouseEventHandler<HTMLButtonElement>;
}
export interface ModalProps {
	open: boolean;
	onCancel: () => void;
	children: ReactNode;
}
