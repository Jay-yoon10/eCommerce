import React from "react";
import styles from "./ProductCard.module.scss";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
const ProductCard = ({ product, toggleCart, toggleFav }) => {
    const imgURL = product.image;
    // const cartIcon = product.isCart ? styles.cartIcon_On : styles.cartIcon_Off;
    const favIcon = product.isFav ? styles.favIcon_On : styles.favIcon_Off;

    // const handleCart = () => {
    //     toggleCart(product);
    // };
    const handleFav = () => {
        toggleFav(product);
    };
    let navigate = useNavigate();

    return (
        <div className={styles.Product}>
            <div className={styles.Product__Box}>
                <img
                    alt="product imge"
                    className={styles.Product__Img}
                    src={imgURL}
                    onClick={() => {
                        navigate(`/products/${product.id}`);
                    }}
                />
                <h4 className={styles.Product__title}>
                    {product.title.substring(0, 25)}...
                </h4>

                <p className={styles.Product__Cat}>
                    <div className={styles.Product__Cat__category}>
                        Category : {product.category}
                    </div>
                    <div className={styles.Product__Cat__quantity}>
                        TOTAL STOCK : {product.Quantity}
                    </div>
                </p>
                <div className={styles.icons}>
                    <Button
                        onClick={() => {
                            navigate(`/products/${product.id}`);
                        }}
                        variant="primary"
                    >
                        More Info
                    </Button>{" "}
                    {/* <FontAwesomeIcon
                        icon={faCartArrowDown}
                        onClick={handleCart}
                        className={cartIcon}
                    /> */}
                    <FontAwesomeIcon
                        icon={faThumbsUp}
                        onClick={handleFav}
                        className={favIcon}
                    />
                </div>
                <p className={styles.Product__Des}>
                    {product.description.substring(0, 100)}...
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
