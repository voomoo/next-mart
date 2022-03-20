import jwtDecode from "jwt-decode";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Axios from "../../api/apiConfig";
import { ProductType, TokenType } from "../../dataTypes/types";
import { FilteringState, IntegratedFiltering } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
} from "@devexpress/dx-react-grid-bootstrap4";

const AdminProductPage: NextPage<ProductType[] | any> = ({ products }) => {
  const router = useRouter();
  const [columns] = useState([
    { name: "id", title: "ID" },
    { name: "name", title: "Name" },
    { name: "category", title: "Category" },
    { name: "description", title: "Description" },
    { name: "price", title: "Price" },
    { name: "quantity", title: "Quantity" },
    { name: "unit", title: "Unit" },
    { name: "image", title: "Image" },
    { name: "code", title: "Code" },
    { name: "discount", title: "Discount" },
    { name: "availability", title: "Availability" },
  ]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/");
      } else {
        const decodedToken: TokenType = jwtDecode(token as string);
        if (decodedToken.role !== "admin") {
          router.push("/");
        }
      }
    }
  }, []);

  return (
    <div>
      <Grid rows={products} columns={columns}>
        <FilteringState defaultFilters={[]} />
        <IntegratedFiltering />
        <Table />
        <TableHeaderRow />
        <TableFilterRow />
      </Grid>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let res: any = [];
  try {
    res = await Axios.get(`/products`);
    console.log(res);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      products: res.data.data.map((product: any) => ({
        id: product.id,
        name: product.name,
        category: product.category,
        description: product.description,
        price: product.price,
        quantity: product.product_qty,
        unit: product.product_unit,
        image: product.product_image,
        code: product.product_code ? product.product_code : "N/A",
        discount: product.product_discount,
        availability: product.in_stock ? "In Stock" : "Out of Stock",
      })),
    },
  };
};

export default AdminProductPage;
