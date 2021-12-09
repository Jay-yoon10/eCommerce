import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Stock from "../Stock";
import { Link } from "react-router-dom";

const ProductDetail = ({ stock, setStock }) => {
    const [alert, setAlert] = useState(true);
    const [item, setItem] = useState({});
    const [inputData, setInputData] = useState("");
    let params = useParams();
    console.log("Detail stock is ", stock);
    const getItem = async () => {
        const response = await fetch(
            `https://fakestoreapi.com/products/${params.id}`,
        );
        const data = await response.json();
        setItem(data);
    };
    useEffect(() => {
        getItem(params.id);
    }, []);

    useEffect(() => {
        let timer = setTimeout(() => {
            setAlert(false);
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    // let { id } = useParams();
    // const matchingItem = products.find(function (product) {
    //     return product.id == id;
    // });
    let navigate = useNavigate();
    let imgURL = item.image;
    console.log(item);
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
                    <img src={imgURL} width="100%" />
                </div>

                <div className="col-md-6 mt-4">
                    <div>
                        <h4 className="pt-5">{item.title}</h4>
                        <p>{item.description}</p>
                        <p>${item.price} AUD</p>
                    </div>

                    <Stock stock={stock} />
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            setStock(
                                stock.map((a) => {
                                    if (a <= 0) {
                                        return 0;
                                    }
                                    return a - 1;
                                }),
                            );
                        }}
                    >
                        Order
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => navigate("/cart")}
                    >
                        Cart
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={({ navigation: { goBack } }) => {
                            goBack();
                        }}
                    >
                        Backward
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
