import React from "react";
// import ProductList from "../ProductList";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
const Cart = ({ products, stock, toggleCart, setStock }) => {
    const [cartItems, setCartItems] = useState(
        products.filter((product) => product.isCart),
    );
    const cartLength = cartItems.length;
    useEffect(() => {
        setCartItems(products.filter((product) => product.isCart));
    }, [products]);

    return (
        <div>
            {/* <div>
                {cartLength ? (
                    <ProductList products={cartItems} toggleCart={toggleCart} />
                ) : (
                    <h3>Your Cart is Empty !</h3>
                )}
            </div> */}

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Edit QTY</th>
                    </tr>
                </thead>
                <tbody>
                    {cartLength ? (
                        cartItems.map((a, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{a.title}</td>
                                    <td>{stock[i]}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                setStock(
                                                    stock.map((a, i) => {
                                                        if (a < 0) {
                                                            return 0;
                                                        }
                                                        return a[i] + 1;
                                                    }),
                                                );
                                            }}
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => {
                                                setStock(
                                                    stock.map((a) => {
                                                        if (a <= 1) {
                                                            return 0;
                                                        }
                                                        return a - 1;
                                                    }),
                                                );
                                            }}
                                        >
                                            -
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <h3>Your Cart is Empty !</h3>
                    )}
                </tbody>
            </Table>
        </div>
    );
};
function stateToProps(state) {
    return {
        state: state,
    };
}
export default connect(stateToProps)(Cart);
