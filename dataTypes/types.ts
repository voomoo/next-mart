//Data type for pages/api/v1/auth/register response
export type ResponseData = {
	success: boolean;
	data: any;
};

//Data type for api/authApiHelper
export type AuthPayloadType = {
	name?: string;
	email: string;
	address?: string;
	phone?: string;
	password: string;
};

//Query type for lib/db.js
export type QuerType = {
	query: string;
	values: string[];
};

//token data type
export type TokenType = {
	id: string;
	name: string;
	email: string;
	phone: string;
	role: string;
	points: number;
	firstLogin: number;
};

//product data type

export type ProductType = {
	id: string;
	name: string;
	price: number;
	description: string;
	product_unit: string;
	product_qty: number;
	product_image: string;
	product_code: string | null;
	product_discount: number;
	in_stock: number;
	category: string;
};
