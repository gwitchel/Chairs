import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/me">my profile</a>
        </li>
        <li>
          <a href="/chairs">chairs</a>
        </li>
        <li>
          <a href="/friends">friends</a>
        </li>
        <li>
          <a href="/settings">settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;