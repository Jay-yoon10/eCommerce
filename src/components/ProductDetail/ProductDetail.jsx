import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Stock from "../Stock";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import TabContent from "../TabContent";
import { CSSTransition } from "react-transition-group";
import styles from "./ProductDetail.module.scss";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = ({ onChange, products, stock, setStock, toggleCart }) => {
    let dispatch = useDispatch();
    const [alert, setAlert] = useState(true);
    const [switchOn, setSwitchOn] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    let params = useParams();
    const sortedProducts = products.sort((a, b) => {
        return a.id - b.id;
    });
    // console.log("params", params);

    console.log("Sortedproducts", sortedProducts);
    // const handleCart = () => {
    //     toggleCart(sortedProducts[params.id - 1]);
    // };

    useEffect(() => {
        let timer = setTimeout(() => {
            setAlert(false);
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    let navigate = useNavigate();
    let imgURL = sortedProducts[params.id - 1].image;

    return (
        <div className="container">
            <div>
                <Link to={`/products/${params.id}`}></Link>
                <title>Product Detail</title>
            </div>
            {/* {inputData}
            <input
                onChange={(e) => {
                    setInputData(e.target.value);
                }}
            /> */}

            {alert === true ? (
                <div className="my-alert">
                    {" "}
                    <p>Selling Fast!!</p>
                </div>
            ) : null}

            <div className="row">
                <div className="col-md-6">
                    <img alt="product" src={imgURL} width="100%" />
                </div>

                <div className="col-md-6 mt-4">
                    <div>
                        <h4 className="pt-5">
                            {sortedProducts[params.id - 1].title}
                        </h4>
                        <p>{sortedProducts[params.id - 1].description}</p>
                        <p>${sortedProducts[params.id - 1].price} AUD</p>
                    </div>

                    <Stock
                        sortedProducts={sortedProducts}
                        stock={stock}
                        params={params}
                    />
                    {/* <button
                        className="btn btn-danger"
                        onClick={handleDecrement}
                    >
                        Order
                    </button> */}
                    {/* <button className="btn btn-danger" onClick={handleCart}> */}
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            dispatch({
                                type: "addItem",
                                payload: {
                                    id: sortedProducts[params.id - 1].id,
                                    title: sortedProducts[params.id - 1].title,
                                    Quantity:
                                        sortedProducts[params.id - 1].Quantity,
                                    price: sortedProducts[params.id - 1].price,
                                },
                            });
                            navigate("/carts");
                        }}
                    >
                        Add to Cart
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => navigate(-1)}
                    >
                        Backward
                    </button>
                    <Link to="/cart">
                        <button className="btn btn-danger">My Cart</button>
                    </Link>
                </div>
            </div>
            <Nav className="mt=5" variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link
                        eventKey="link-0"
                        onClick={() => {
                            setSwitchOn(false);
                            setActiveTab(0);
                        }}
                    >
                        Active
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        eventKey="link-1"
                        onClick={() => {
                            setSwitchOn(false);
                            setActiveTab(1);
                        }}
                    >
                        Option 2
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <CSSTransition in={switchOn} classNames="transition" timeout={500}>
                <TabContent activeTab={activeTab} setSwitchOn={setSwitchOn} />
            </CSSTransition>
        </div>
    );
};
// const stateToProps = (state) => {
//     return {
//         state: state.reducer,
//         alertOn: state.reducer2,
//     };
// };
// export default connect(stateToProps)(ProductDetail);
export default ProductDetail;
