import ProductList from "../ProductList";

const Dashboard = ({ products, toggleCart }) => {
    return (
        <div>
            <h1>Welcome to the Store</h1>
            <ProductList toggleCart={toggleCart} products={products} />
        </div>
    );
};

export default Dashboard;
