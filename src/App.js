/*eslint-disable*/
import NavBar from "./components/NavBar";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarouselHome from "./components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Dashboard from "./containers/Dashboard";
import CartsItem from "./containers/CartsItem/CartsItem";
import FavItem from "./containers/FavItem/FavItem";
import ProductDetail from "./components/ProductDetail";
import Cart from "./containers/Cart";
import {
    getFBProducts,
    deleteProducts,
    updateProducts,
    createProducts,
} from "./services/products";
import firestore from "./firebase";
import firebase from "firebase/compat/app";
let stockContext = React.createContext();

function App() {
    const [products, setProducts] = useState([]);
    const [displayItems, setDisplayItems] = useState([]);
    const [search, setSearch] = useState("");
    const qty = products.map((a, i) => {
        return a.Quantity;
    });
    const [stock, setStock] = useState(0);

    const getStock = async () => {
        setStock(qty);
    };
    useEffect(() => {
        getStock();
    }, []);
    // console.log("stock ", stock);
    // const [fbProducts, setFbProducts] = useState([]);

    const db = firebase.firestore();
    // const getStock = async () => {
    //     setStock(
    //         db
    //             .collection("product")
    //             .get()
    //             .then((snap) => {
    //                 snap.forEach((item) => {
    //                     item.data().Quantity;
    //                 });
    //             }),
    //     );
    // };
    // useEffect(() => {
    //     getStock();
    // }, []);
    // const getProducts = async () => {
    //     const response = await fetch("https://fakestoreapi.com/products");
    //     const data = await response.json();
    //     setProducts(data);
    // };
    const getData = async () => {
        const data = await getFBProducts();
        setProducts(data);
    };
    useEffect(() => {
        getData();
    }, []);
    // console.log("fbProduct is :", products);
    // const fetchDB = async () => {
    //     const response = db.collection("product");
    //     const firestoreData = await response.get();
    //     firestoreData.forEach((item) => {
    //         setStock([item.Quantity]);
    //     });
    // };
    //
    // useEffect(() => {
    //     fetchDB();
    // }, []);
    const updateProducts = () => {
        setDisplayItems(
            products.filter((product) => {
                return product.title
                    .toLowerCase()
                    .includes(search.toLowerCase());
            }),
        );
    };
    //
    const toggleCart = (selectedItem) => {
        setProducts(
            products.map((product) => {
                return product.title !== selectedItem.title
                    ? product
                    : { ...product, isCart: !product.isCart };
            }),
        );
    };

    const toggleFav = (selectedItem) => {
        setProducts(
            products.map((product) => {
                return product.title !== selectedItem.title
                    ? product
                    : { ...product, isFav: !product.isFav };
            }),
        );
    };
    //
    useEffect(() => {
        updateProducts();
    }, [search, products]);
    //
    // useEffect(() => {
    //     getProducts();
    // }, []);

    // products.forEach((obj, i) => {
    //     {
    //         return db.collection("product").add({
    //             id: obj.id,
    //             title: obj.title,
    //             category: obj.category,
    //             description: obj.description,
    //             price: obj.price,
    //             image: obj.image,
    //             ratingRate: obj.rating.rate,
    //             ratingCount: obj.rating.count,
    //         });
    //     }
    // });

    // const handleCreate = async (newRecord) => {
    //     await createProducts(newRecord);
    //     getProducts();
    // };
    return (
        <div className="App">
            <stockContext.Provider value={stock}>
                <Router>
                    <NavBar handleSearch={setSearch} />
                    <Routes>
                        <Route
                            path="/dashboard"
                            element={<CarouselHome products={products} />}
                        />
                        <Route
                            path="/product"
                            element={
                                <Dashboard
                                    products={displayItems}
                                    setSearch={setSearch}
                                    toggleCart={toggleCart}
                                    toggleFav={toggleFav}
                                />
                            }
                        />
                        {/* <Route
                        path="/cart"
                        element={
                            <CartsItem
                                products={products}
                                toggleCart={toggleCart}
                                stock={setStock}
                            />
                        }
                    /> */}
                        <Route
                            path="/cart"
                            element={
                                <Cart
                                    products={products}
                                    toggleCart={toggleCart}
                                    stock={stock}
                                    setStock={setStock}
                                />
                            }
                        />
                        <Route
                            path="/favourite"
                            element={
                                <FavItem
                                    products={products}
                                    toggleFav={toggleFav}
                                />
                            }
                        />
                        <Route
                            path="/products/:id"
                            element={
                                <ProductDetail
                                    toggleCart={toggleCart}
                                    products={products}
                                    setProducts={setProducts}
                                    stock={stock}
                                    setStock={setStock}
                                />
                            }
                        />
                    </Routes>
                </Router>
            </stockContext.Provider>
        </div>
    );
}

export default App;
