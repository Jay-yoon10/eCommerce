import NavBar from "./components/NavBar";
import "./App.scss";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import CarouselHome from "./components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./components/ProductCard";
import { useEffect, useState } from "react";
import Dashboard from "./containers/Dashboard";

function App() {
    const [products, setProducts] = useState([]);
    const [displayItems, setDisplayItems] = useState([]);
    const [search, setSearch] = useState("");
    //
    const getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
    };
    //
    //
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
                    : { ...product, isFav: !product.isFav };
            }),
        );
    };
    //
    useEffect(() => {
        updateProducts();
    }, [search, products]);
    //
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div className="App">
            <NavBar handleSearch={setSearch} />
            <CarouselHome products={products} />
            <Dashboard
                products={displayItems}
                setSearch={setSearch}
                toggleCart={toggleCart}
            />
        </div>
    );
}

export default App;
