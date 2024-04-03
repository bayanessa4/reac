import React from 'react';

function Nav() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/items">Items</a></li>
          <li><a href="/add">Add Item</a></li>
        </ul>
      </nav>  
    </>
  )
}

export default Nav;
