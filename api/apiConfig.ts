import axios from "axios";

const Axios = axios.create({
	baseURL: "http://localhost:3000/api/v1/",
	timeout: 10000,
	validateStatus: (status) => {
		return status < 500;
	},
});


export default Axios;
