import { NextPage } from "next"
import { Dispatch, SetStateAction } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react"
import { bool, boolean } from "yup"

type PropsType = {
    showProductDetails: boolean;
    setShowProductDetails: Dispatch<SetStateAction<boolean>>;
    productName: string;
    productQty: string;
    productPrice: number;
    productImage: string;
    inStock: boolean;
    productDescription: string;
}

const ProductDetailsModal: NextPage<PropsType> = ({ showProductDetails, setShowProductDetails, productName, productQty, productPrice, productImage, inStock, productDescription }) => {
    return (
        <Modal
            onClose={() => setShowProductDetails(false)}
            onOpen={() => setShowProductDetails(true)}
            open={showProductDetails}
        >

            <Modal.Content image>
                <Image src={productImage} />
                <Modal.Description>
                    <Header>{productName}</Header>
                    <h4>{productQty}</h4>
                    <p style={{ color: inStock ? "green" : "red" }}>Stock: <b> {inStock ? "In Stock" : "Out of stock"}</b></p>
                    <p>
                        {productDescription}
                    </p>

                    <h3>Price: {productPrice}</h3>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black'
                    onClick={() => setShowProductDetails(false)}
                >
                    Close
                </Button>
                <Button
                    content="Add to cart"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => setShowProductDetails(false)}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}

export default ProductDetailsModal;