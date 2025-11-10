import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Evan Barber's Enraged Baracuda || ITIS3135 Course Page</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/introduction">Introduction</Link> |{" "}
        <Link to="/contract">Contract</Link>
      </nav>
    </header>
  );
}