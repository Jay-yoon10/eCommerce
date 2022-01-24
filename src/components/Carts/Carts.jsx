import { Table } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Carts = ({ products }) => {
    let state = useSelector((state) => state.reducer);
    let alertOn = useSelector((state) => state.reducer2);
    let dispatch = useDispatch();
    const [formQty, setFormQty] = useState(1);

    const handleQtyChange = (newQty) => {
        if (newQty < 0) return;
        setFormQty(newQty);
    };
    console.log("products value is ", products);

    const increment = () => {
        handleQtyChange(formQty + 1);
    };

    const decrement = () => {
        handleQtyChange(formQty - 1);
    };

    return (
        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product name</th>
                        <th>Available Stock</th>
                        <th>QTY</th>
                        <th>Price</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((a, i) => {
                        console.log("a", a);
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{a.title}</td>
                                <td>{a.Quantity}</td>
                                <td>{formQty}</td>
                                <td>AU$ {a.price * formQty} </td>

                                <td>
                                    <button
                                        onClick={() => {
                                            increment();
                                            if (formQty >= 1) {
                                                dispatch({
                                                    type: "stockDecrement",
                                                    data: i,
                                                });
                                            }
                                        }}
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => {
                                            decrement();
                                            if (formQty > 1) {
                                                dispatch({
                                                    type: "stockIncrement",
                                                    data: i,
                                                });
                                            }
                                        }}
                                    >
                                        -
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

            {alertOn === true ? (
                <div>
                    <p>Sale Ends Soon ! Hurry!</p>
                    <button
                        onClick={() => {
                            dispatch({ type: "buttonClicked" });
                        }}
                    >
                        Close
                    </button>
                </div>
            ) : null}
        </div>
    );
};
export default Carts;
