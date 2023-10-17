import React, { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    const onIncrement = () => setCount(count + 1);
    const onDecrement = () => setCount(count - 1);
    return (
      <div>
        <p>Count: <strong>{count}</strong>&nbsp;
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        </p>
      </div>
    );
}

export default Counter;