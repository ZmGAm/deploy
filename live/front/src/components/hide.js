import React, { useState } from 'react';

const DecreasingElement = () => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(100);

  const decreaseSize = () => {
    setWidth(width - 20);
    setHeight(height - 10);
  };

  return (<>
    <h1>hide Me</h1>
    <div style={{ width, height, border: '1px solid black' }}>
      Decreasing Element
      <button onClick={decreaseSize}>Decrease Size</button>
    </div>
    </>
  );
};

export default DecreasingElement;
