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
	message?: string;
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
	interim?: string;
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

export interface FormBuyer {
	name: string;
	email: string;
	phone: string;
	message?: string;
	country: string;
	city: string;
	street: string;
	house: string;
	apartment: string;
	iscash: boolean;
}
export interface BuyerProps {
	onFormSubmit: (formBuyer: { id: number } & Omit<FormBuyer, 'id'>) => void;
}

export interface ValidationRule {
	fields: string[];
	condition: (value: string) => boolean;
	errorMessage: string;
}

export interface FormErrors {
	[key: string]: string;
}
