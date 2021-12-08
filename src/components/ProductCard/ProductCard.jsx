import React from "react";

const ProductCard = ({ product, toggleCart }) => {
    const imgURL = product.image;
    const handleCart = () => {
        toggleCart(product);
    };
    return (
        <div>
            <div>
                <h3>{product.title}</h3>
                <p>{product.category}</p>
                <p>{product.description}</p>
            </div>
            <div>
                <img src={imgURL} />
            </div>
        </div>
    );
};

export default ProductCard;
