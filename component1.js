import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(_count => _count+1);

  return (
    <>
      Count: {count}
      <button style={{margin: 4}} onClick={handleClick}>Add</button>
    </>
  )
};

export default Counter;
