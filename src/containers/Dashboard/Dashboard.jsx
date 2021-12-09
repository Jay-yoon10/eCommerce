import ProductList from "../ProductList";

const Dashboard = ({ products, toggleCart, toggleFav }) => {
    return (
        <div>
            <h1>Welcome to the Store</h1>
            <ProductList
                toggleCart={toggleCart}
                products={products}
                toggleFav={toggleFav}
            />
        </div>
    );
};

export default Dashboard;
