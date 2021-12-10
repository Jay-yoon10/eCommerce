import React from "react";
// import ProductList from "../ProductList";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import styles from "./Cart.module.scss";
const Cart = ({ products, stock, toggleCart, setStock }) => {
    const [cartItems, setCartItems] = useState(
        products.filter((product) => product.isCart),
    );
    const [quantity, setQuantity] = useState(1);
    const [currentQty, setCurrentQty] = useState(quantity);

    const getQuantity = () => {
        setQuantity(quantity);
    };

    const handleIncrement = () => {
        if (quantity >= 0) setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) setQuantity(quantity - 1);
    };
    useEffect(() => {
        getQuantity();
    }, []);

    const cartLength = cartItems.length;
    useEffect(() => {
        setCartItems(products.filter((product) => product.isCart));
    }, [products]);

    return (
        <div className={styles.Cart}>
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th className="Table_OrderNum">#</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Edit QTY</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>

                    {cartLength ? (
                        cartItems.map((a, i) => {
                            return (
                                <>
                                    <tbody>
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{a.title}</td>
                                            <td>${a.price.toFixed(2)}</td>
                                            <td>{quantity}</td>
                                            <td>
                                                <button
                                                    onClick={handleIncrement}
                                                >
                                                    +
                                                </button>
                                                <button
                                                    onClick={handleDecrement}
                                                >
                                                    -
                                                </button>
                                            </td>
                                            <td>
                                                $
                                                {(quantity * a.price).toFixed(
                                                    2,
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </>
                            );
                        })
                    ) : (
                        <h3>Your Cart is Empty !</h3>
                    )}
                    {cartLength ? (
                        <tfoot>
                            <tr>
                                <td>-</td>
                                <td>-</td>
                                <td>Total Qty : </td>
                                <td>{currentQty}</td>
                                <td>Total Price :</td>
                                <td>2</td>
                            </tr>
                        </tfoot>
                    ) : (
                        0
                    )}
                </Table>
            </div>
        </div>
    );
};
function stateToProps(state) {
    return {
        state: state,
    };
}
export default connect(stateToProps)(Cart);
