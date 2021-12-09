import React from "react";
import styles from "./ProductCard.module.scss";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import ProductDetail from "../ProductDetail";

const ProductCard = ({ product, toggleCart, toggleFav }) => {
    const imgURL = product.image;
    const cartIcon = product.isCart ? styles.cartIcon_On : styles.cartIcon_Off;
    const favIcon = product.isFav ? styles.favIcon_On : styles.favIcon_Off;

    const handleCart = () => {
        toggleCart(product);
    };
    const handleFav = () => {
        toggleFav(product);
    };
    let navigate = useNavigate();

    return (
        <div className={styles.Product}>
            <div className={styles.Product__Box}>
                <img
                    className={styles.Product__Img}
                    src={imgURL}
                    onClick={() => {
                        navigate(`/products/${product.id}`);
                    }}
                />
                <h4>{product.title}</h4>
                <div>
                    <FontAwesomeIcon
                        icon={faCartArrowDown}
                        onClick={handleCart}
                        className={cartIcon}
                    />
                    <FontAwesomeIcon
                        icon={faThumbsUp}
                        onClick={handleFav}
                        className={favIcon}
                    />
                </div>

                <p className={styles.Product__Cat}>
                    {product.category}
                    {product.Quantity}
                </p>

                <p className={styles.Product__Des}>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
