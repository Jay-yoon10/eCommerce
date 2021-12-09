import ProductList from "../ProductList";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const CartsItem = ({ products, toggleCart }) => {
    const [cartItems, setCartItems] = useState(
        products.filter((product) => product.isCart),
    );
    const cartLength = cartItems.length;
    useEffect(() => {
        setCartItems(products.filter((product) => product.isCart));
    }, [products]);
    return (
        <div>
            <div>
                {cartLength ? (
                    <ProductList products={cartItems} toggleCart={toggleCart} />
                ) : (
                    <h3>Your Cart is Empty !</h3>
                )}
            </div>
            <div>
                <Table responsive>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Edit</th>
                    </tr>
                    <tr>
                        <th>{products.id}</th>
                        <th>Table Cell</th>
                        <th>Table Cell</th>
                        <th>Table Cell</th>
                    </tr>
                </Table>
            </div>
        </div>
    );
};

export default CartsItem;
