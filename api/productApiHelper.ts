import Axios from "./apiConfig";
import { toast } from "react-toastify";


const ProductApiHelper = async ( productCategory:string) => {
	try {
		const res = await Axios.get(productCategory ? `/products/${productCategory}` : '/products');
		if (!res.data.success) {
			toast.error("Data Fetching Error");
		} else {
			return res;
		}
	} catch (error) {
		console.log(error);
	}
};

export default ProductApiHelper;
