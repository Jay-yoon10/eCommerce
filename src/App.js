/*eslint-disable*/
import NavBar from "./components/NavBar";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarouselHome from "./components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Carts from "./components/Carts";
import FavItem from "./containers/FavItem/FavItem";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./containers/ProductList";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import {
    getFBProducts,
    deleteProducts,
    updateFBProducts,
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
    console.log("App, display items are ", displayItems);

    let alertState = true;
    const reducer2 = (state = alertState, action) => {
        if (action.type === "buttonClicked") {
            const state = false;
            return state;
        }
        return state;
    };

    let initialValue = products;
    // console.log("initialValue is", initialValue);
    const reducer = (state = [], action) => {
        if (action.type === "addItem") {
            const exist = state.findIndex((a) => {
                // console.log("action.payload.title", action.payload.title);
                // console.log("a.title", a.title);

                return a.title === action.payload.title;
            });
            if (exist >= 0) {
                const copy = [...state];
                copy[exist].Quantity++;
                return copy;
            } else {
                const copy = [...state];
                copy.push(action.payload);
                return copy;
            }
        } else if (action.type === "stockIncrement") {
            const copy = [...state];
            copy[action.data].Quantity++;
            return copy;
        } else if (action.type === "stockDecrement") {
            const copy = [...state];
            copy[action.data].Quantity--;
            return copy;
        }
        return state;
    };

    let store = createStore(combineReducers({ reducer, reducer2 }));

    const getStock = async () => {
        setStock(qty);
    };
    useEffect(() => {
        getStock();
    }, []);

    const getData = async () => {
        const data = await getFBProducts();
        setProducts(data);
    };

    const handleChange = async (updateRecord) => {
        const { id, ...record } = updateRecord;
        await updateFBProducts(id, record);
        getData();
    };

    useEffect(() => {
        getData();
    }, []);

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

    return (
        <div className="App">
            <Provider store={store}>
                <stockContext.Provider value={stock}>
                    <Router>
                        <NavBar handleSearch={setSearch} />
                        <Routes>
                            <Route
                                path="/"
                                element={<CarouselHome products={products} />}
                            />
                            <Route
                                path="/product"
                                element={
                                    <ProductList
                                        toggleCart={toggleCart}
                                        products={products}
                                        toggleFav={toggleFav}
                                        onChange={handleChange}
                                    />
                                }
                            />

                            <Route
                                path="/carts"
                                element={
                                    <Carts
                                        onChange={handleChange}
                                        products={products}
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
            </Provider>
        </div>
    );
}

export default App;
