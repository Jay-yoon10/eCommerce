import { useParams } from "react-router-dom";

const Stock = ({ sortedProducts, stock, setStock, params }) => {
    return <p>Stock : {sortedProducts[params.id - 1].Quantity}</p>;
};

export default Stock;
