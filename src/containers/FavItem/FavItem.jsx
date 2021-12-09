import ProductList from "../ProductList";
import { useEffect, useState } from "react";

const FavItem = ({ products, toggleFav }) => {
    const [favItems, setFavItems] = useState(
        products.filter((product) => product.isFav),
    );

    useEffect(() => {
        setFavItems(products.filter((product) => product.isFav));
    }, [products]);
    return favItems.length ? (
        <ProductList products={favItems} toggleFav={toggleFav} />
    ) : (
        <h3>You do not have any favourite items!!</h3>
    );
};

export default FavItem;
