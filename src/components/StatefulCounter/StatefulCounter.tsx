import { useState } from 'react';

export const StatefulCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrement = () => {
    setCount((previousCount) => previousCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <p className="counter-value">Count: {count}</p>

      <div className="actions">
        <button type="button" onClick={decrement}>
          -
        </button>

        <button type="button" onClick={reset}>
          Reset
        </button>

        <button type="button" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};
