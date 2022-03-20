import { NextPage } from "next";
import { useState } from "react";
import { Button, Card, Grid, Header, Image } from "semantic-ui-react";
import { ProductCardPropsType } from "../dataTypes/propsTypes";
import ProductDetailsModal from "./ProductDetailsModal";


const ProductCard: NextPage<ProductCardPropsType> = ({ productName, productQty, productPrice, productImage, inStock, productDescription }) => {
    const extra = (
        <Button.Group fluid>
            <Button color="yellow" onClick={() => setShowProductDetails(!showProductDetails)}>Details</Button>
            <Button color="green">Add to Cart</Button>
        </Button.Group>
    );

    const header = (
        <Header size="medium" style={{ textAlign: "center", margin: "0px", height: "50px" }}>
            {
                productName.length > 50
                    ? productName.substring(0, 50).concat(". . . ")
                    : productName
            }
        </Header>
    );

    const description = (
        <Header color="black" style={{ textAlign: "center", margin: "0px" }}>
            ৳ {productPrice}
        </Header>
    );
    const meta = (
        <Header
            size="small"
            color="grey"
            style={{ textAlign: "center", margin: "0px 0px 15px 0px" }}
        >
            <span style={{ color: inStock ? "green" : "red", display: "block" }}>{inStock ? "In stock" : "Out of Stock"}</span>
            {productQty}
        </Header>
    );

    const img = (
        <Image centered src={productImage} size='small' />
    )
	const [showProductDetails, setShowProductDetails] = useState(false)

    return (
        <Grid.Column style={{ margin: "10px 0px" }} computer={4} largeScreen={4} tablet={5} mobile={16}>
            <Card
                color={inStock ? "green" : "red"}
                image={img}
                header={header}
                meta={meta}
                description={description}
                extra={extra}

            />
            <ProductDetailsModal
                showProductDetails={showProductDetails}
                setShowProductDetails={setShowProductDetails}
                productName = {productName} 
                productQty = {productQty} 
                productPrice = {productPrice} 
                productImage = {productImage} 
                inStock = {inStock === 1}
                productDescription = {productDescription} 
            />
        </Grid.Column>
    );
};

export default ProductCard;
