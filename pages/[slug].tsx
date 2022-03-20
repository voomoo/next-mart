import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import Axios from "../api/apiConfig";
import ProductApiHelper from "../api/productApiHelper";
import ProductCard from "../components/ProductCard";
import ProductDetailsModal from "../components/ProductDetailsModal";
import { ProductType } from "../dataTypes/types";

interface IParams extends ParsedUrlQuery {
	slug: string;
}

// const products = [
// 	{
// 		productName: "Cheese Puff",
// 		productQty: "1 pc(s)",
// 		productPrice: 10,
// 		productImage:
// 			"https://chaldn.com/_mpimage/cheese-puff-1-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D35210&q=low&v=1&m=400&webp=1",
// 	},
// 	{
// 		productName: "Bombay Sweets Potato Crackers",
// 		productQty: "22 gm",
// 		productPrice: 10,
// 		productImage:
// 			"https://chaldn.com/_mpimage/bombay-sweets-potato-crackers-22-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D47732&q=low&v=1&m=400&webp=1",
// 	},
// 	{
// 		productName: "Bombay Sweets Mr. Twist",
// 		productQty: "22 gm",
// 		productPrice: 15,
// 		productImage:
// 			"https://chaldn.com/_mpimage/bombay-sweets-mr-twist-22-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D47731&q=low&v=1&m=400&webp=1",
// 	},
// 	{
// 		productName: "Bombay Sweets Ring Chips",
// 		productQty: "20 gm",
// 		productPrice: 10,
// 		productImage:
// 			"https://chaldn.com/_mpimage/bombay-sweets-ring-chips-20-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D47733&q=low&v=1&m=400&webp=1",
// 	},
// 	{
// 		productName: "Detos Chicken Wing Chips",
// 		productQty: "30 gm",
// 		productPrice: 20,
// 		productImage:
// 			"https://chaldn.com/_mpimage/detos-chicken-wings-chips-30-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D65800&q=low&v=1&m=400&webp=1",
// 	},
// 	{
// 		productName: "Cheese Ball",
// 		productQty: "20 gm",
// 		productPrice: 10,
// 		productImage:
// 			"https://chaldn.com/_mpimage/bombay-sweets-cheese-ball-cheezee-corn-snacks-20-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D48121&q=low&v=1&m=400&webp=1",
// 	},
// 	{
// 		productName: "Lay's American Style Cream & Onion",
// 		productQty: "52 gm",
// 		productPrice: 60,
// 		productImage:
// 			"https://chaldn.com/_mpimage/lays-american-style-cream-onion-52-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D21317&q=low&v=1&m=400&webp=1",
// 	},
// ];

const ProductPage: NextPage<ProductType[] | any> = ({products}) => {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<Grid centered>
			{products.map((product:ProductType) => (
				<ProductCard
					key={product.id}
					productName={product.name}
					productQty={`${product.product_qty} ${product.product_unit}`}
					productPrice={product.price}
					productImage={product.product_image}
					inStock = {product.in_stock}
					productDescription = {product.description}
				/>
			))}
			
		</Grid>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { slug } = context.params as IParams;
	let res: any = []
	try {
		res = await Axios.get(`/products/${slug}`);
		console.log(res)
		
	} catch (error) {
		console.log(error)
	}
	
	return {
		props: {
			products : res.data.data.map((product: any) => ({
				id: product.id,
				name: product.name,
				price: product.price,
				description: product.description,
				product_unit: product.product_unit,
				product_qty: product.product_qty,
				product_image: product.product_image,
				product_code: product.product_code,
				product_discount: product.product_discount,
				in_stock: product.in_stock,
				category: product.category,
			}))

			// id: products,
			// name: "Bombay Sweets Potato Crackers",
			// price: 10,
			// description:
			// 	"Ingredients: Potato, Edible vegetable oil & Spices. Nutrition facts- Calories 94, protein 3g & No cholesterol",
			// product_unit: "gm",
			// product_qty: 20,
			// product_image:
			// 	"https://chaldn.com/_mpimage/bombay-sweets-potato-crackers-22-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D47732&q=low&v=1&m=400&webp=1",
			// product_code: null,
			// product_discount: 0,
			// in_stock: 1,
			// category: "food",
		},
	};
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

    return {
        paths: ["/food", "/hygiene"], //indicates that no page needs be created at build time
        fallback: false //indicates the type of fallback
    }
}

export default ProductPage;
