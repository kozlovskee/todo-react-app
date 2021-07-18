import React from 'react';

const Header = (props) => {
  const count = props.count.length;

  return (
    <header>
      <h1>You have {count} TODOS!</h1>
    </header>
  );
}

export default Header;
