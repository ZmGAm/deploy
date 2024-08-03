import React from 'react';

const DynamicDivs = () => {
  const elements = ['div', 'span', 'button'];

  return (
    <div>
      {elements.map((el, index) => (
        React.createElement(el, { key: index }, 'hello')
      ))}
    </div>
  );
};

export default DynamicDivs;
