const Counter = ({ remainingQty, onChange }) => {
    return (
        <div>
            <button onClick={() => onChange(remainingQty - 1)}>-</button>
            <button onClick={() => onChange(remainingQty + 1)}>+</button>
        </div>
    );
};

export default Counter;
