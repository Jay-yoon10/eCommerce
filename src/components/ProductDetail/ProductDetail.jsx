import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Stock from "../Stock";
import { Link } from "react-router-dom";

const ProductDetail = ({ products, stock, setStock, toggleCart }) => {
    const [alert, setAlert] = useState(true);
    // const [item, setItem] = useState([]);
    // const [inputData, setInputData] = useState("");
    // const [newQty, setNewQty] = useState(stock);
    let params = useParams();
    const sortedProducts = products.sort((a, b) => {
        return a.id - b.id;
    });
    // const getItem = async () => {
    //     // const response = await fetch(
    //     //     `https://fakestoreapi.com/products/${params.id}`,
    //     // );
    //     // const data = await response.json();
    //     const data = await products;
    //     setItem(data);
    // };
    // useEffect(() => {
    //     getItem(params.id);
    // }, []);
    const handleCart = () => {
        toggleCart(sortedProducts[params.id - 1]);
    };
    // const handleDecrement = () => {
    //     setStock(sortedProducts[params.id - 1].Quantity - 1);
    // };

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
    let imgURL = sortedProducts[params.id - 1].image;

    // console.log("item is equal to ", item);
    // const toFind = item.map((x, i) => {
    //     if ((x.id = params)) {
    //         let found = x;
    //         return found;
    //     }
    // });
    // console.log("toFind is equal to ", toFind);
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
                    <button className="btn btn-danger" onClick={handleCart}>
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
        </div>
    );
};

export default ProductDetail;
