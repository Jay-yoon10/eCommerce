import React from "react";
import ProductCard from "../../components/ProductCard";

const ProductList = ({ products, toggleCart }) => {
    return (
        <div>
            <h2>These are the products</h2>
            <div>
                {products.map((product, index) => {
                    return (
                        <ProductCard
                            key={index}
                            product={product}
                            toggleCart={toggleCart}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProductList;
