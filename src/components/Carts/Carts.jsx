import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Carts = (products, onChange, buttonPlus) => {
    let state = useSelector((state) => state.reducer);
    let alertOn = useSelector((state) => state.reducer2);
    let dispatch = useDispatch();

    const [quantity, setQuantity] = useState(
        products.products.map((a) => {
            return a.Quantity;
        }),
    );

    const product = products.products.map((a, i, array) => {
        return a;
    });

    console.log("products value is ", products.products);
    // console.log("cart new products are ", products);
    // console.log("cart new product is ", product.Quantity);
    // useEffect(() => {
    //     onChange();
    // }, [quantity]);
    // console.log("products in cart is ");

    // console.log("products keys in cart is ", Object.keys[products]);
    return (
        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product name</th>
                        <th>qty</th>
                        <th>price</th>
                        <th>change</th>
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
                                <td>AU$ {a.price}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            dispatch({
                                                type: "stockIncrement",
                                                data: i,
                                            });
                                        }}
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => {
                                            setQuantity(
                                                dispatch({
                                                    type: "stockDecrement",
                                                    data: i,
                                                }),
                                            );
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
            <Table responsive="sm">
                <thead>
                    <tr></tr>
                    <tr>
                        <th>#</th>
                        <th>qty</th>
                        <th>price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
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
// const stateToProps = (state) => {
//     return {
//         state: state.reducer,
//         alertOn: state.reducer2,
//     };
// };
// export default connect(stateToProps)(Carts);
