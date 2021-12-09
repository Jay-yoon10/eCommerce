import ProductCard from "../../components/ProductCard";
// import ProductDetail from "../../components/ProductDetail";
import styles from "./ProductList.module.scss";
const ProductList = ({ products, toggleCart, toggleFav }) => {
    return (
        <div>
            <h2>These are the products</h2>
            <div className={styles.ProductList__Container}>
                {products.map((product, index) => {
                    return (
                        <ProductCard
                            key={index}
                            product={product}
                            toggleCart={toggleCart}
                            toggleFav={toggleFav}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProductList;
