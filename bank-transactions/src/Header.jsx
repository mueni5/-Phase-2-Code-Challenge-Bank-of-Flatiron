import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
  return (
    <React.StrictMode>
      <h1>The Royal Bank of Flatiron</h1>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);

export default Header;